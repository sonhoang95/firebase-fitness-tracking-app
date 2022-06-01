import ExerciseList from './components/ExerciseList';
import NewExerciseForm from './components/NewExerciseForm';
import Layout from './layouts/index';

function App() {
  return (
    <Layout>
      <NewExerciseForm />
      <ExerciseList />
    </Layout>
  );
}

export default App;
