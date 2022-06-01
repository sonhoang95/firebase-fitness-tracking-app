import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import { FaTimes } from 'react-icons/fa';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import Alert from './Alert';

const NewExerciseForm = ({ showModal, setShowModal }) => {
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: 0,
    reps: 0,
    weight: 0,
    category: '',
  });
  const [alert, setAlert] = useState({ msg: '', type: '', show: false });

  const exercisesCollectionRef = collection(db, 'exercises');

  const handleCreateNewExercise = async e => {
    e.preventDefault();
    if (
      !newExercise.name ||
      !newExercise.sets ||
      !newExercise.sets ||
      !newExercise.weight ||
      !newExercise.category
    ) {
      setAlert({ show: true, msg: 'Please Enter All Fields', type: 'error' });
    } else {
      await addDoc(exercisesCollectionRef, {
        ...newExercise,
        createdAt: serverTimestamp(),
      });
      await e.target.reset();
      setAlert({
        show: true,
        msg: 'New Exercise Added Successfully',
        type: 'success',
      });
    }
  };

  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleCreateNewExercise}
        className={`${
          showModal ? 'flex' : 'hidden'
        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[475px] mx-auto flex-col px-8 pb-12 rounded-lg shadow-lg bg-white border border-gray-200`}
      >
        {alert.show && (
          <Alert
            msg={alert.msg}
            type={alert.type}
            showAlert={() => setAlert(false)}
          />
        )}
        <div className="flex items-center justify-between mb-3 pt-8">
          <Title title="Add new exercise" />
          <button
            type="button"
            className="text-2xl"
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </button>
        </div>
        <Input
          title="name"
          type="text"
          setNewExercise={e =>
            setNewExercise({ ...newExercise, name: e.target.value })
          }
        />
        <Input
          title="sets"
          type="number"
          setNewExercise={e =>
            setNewExercise({ ...newExercise, sets: e.target.value })
          }
        />
        <Input
          title="reps"
          type="number"
          setNewExercise={e =>
            setNewExercise({ ...newExercise, reps: e.target.value })
          }
        />
        <Input
          title="weight"
          type="number"
          setNewExercise={e =>
            setNewExercise({ ...newExercise, weight: e.target.value })
          }
        />
        <Input
          title="category"
          type="text"
          setNewExercise={e =>
            setNewExercise({ ...newExercise, category: e.target.value })
          }
        />
        <div className="flex gap-2 justify-end">
          <Button
            name="Cancel"
            closeModal={() => setShowModal(false)}
            styles={{
              background: 'none',
              border: '2px solid rgb(225 29 72)',
              color: 'rgb(225 29 72)',
            }}
          />
          <Button name="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewExerciseForm;
