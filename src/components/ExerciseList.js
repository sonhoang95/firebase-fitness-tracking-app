import React, { useEffect, useState } from 'react';
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { FaTrash, FaEdit } from 'react-icons/fa';
import NewExerciseForm from './NewExerciseForm';
import Category from './Category';

const titles = [
  { title: 'name', id: 1 },
  { title: 'sets', id: 2 },
  { title: 'reps', id: 3 },
  { title: 'weight', id: 4 },
  { title: 'actions', id: 5 },
];

const categories = [
  { name: 'all', id: 1 },
  { name: 'Chest', id: 2 },
  { name: 'Back', id: 3 },
  { name: 'Shoulders', id: 4 },
  { name: 'Arms', id: 5 },
  { name: 'Legs', id: 6 },
];

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const exercisesCollectionRef = collection(db, 'exercises');

  useEffect(() => {
    onSnapshot(exercisesCollectionRef, snapshot => {
      setExercises(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteExercise = async id => {
    const exerciseRef = doc(exercisesCollectionRef, id);
    await deleteDoc(exerciseRef);
  };

  const filterCategory = category => {
    let q = null;
    if (category === 'all') {
      q = query(exercisesCollectionRef, orderBy('createdAt'));
    } else {
      q = query(
        exercisesCollectionRef,
        where('category', '==', category),
        orderBy('createdAt')
      );
    }
    onSnapshot(q, snapshot => {
      setExercises(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  };

  return (
    <div className="container mx-auto my-6">
      <Category categories={categories} onFilterCategory={filterCategory} />
      <section className="flex flex-col">
        <div className="grid grid-cols-5 justify-items-center border-b-2 border-gray-300 py-3">
          {titles.map(item => (
            <h1 key={item.id} className="text-blue-600 font-bold capitalize">
              {item.title}
            </h1>
          ))}
        </div>
        <div className="mb-3">
          {exercises.map(exercise => {
            const { name, id, reps, sets, weight } = exercise;
            return (
              <article
                key={id}
                className="grid grid-cols-5 justify-items-center border-b-2 border-gray-300 py-2"
              >
                <h1 className="capitalize">{name}</h1>
                <h2>{reps}</h2>
                <h2>{sets}</h2>
                <h2>{weight}</h2>
                <div className="flex gap-2">
                  <button>
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteExercise(id)}>
                    <FaTrash />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <button
          className="bg-blue-700 text-white px-6 py-2 rounded-lg mt-3 text-sm font-bold self-end"
          onClick={() => setShowModal(true)}
        >
          Add New Exercise
        </button>
        {showModal && (
          <NewExerciseForm showModal={showModal} setShowModal={setShowModal} />
        )}
      </section>
    </div>
  );
};

export default ExerciseList;
