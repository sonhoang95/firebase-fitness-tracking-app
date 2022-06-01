import ExerciseList from './components/ExerciseList';
import NewExerciseForm from './components/NewExerciseForm';
import Title from './components/Title';
import Layout from './layouts/index';

function App() {
  return (
    <Layout>
      <Title title="Fitness Tracking App" position="center" largeTitle={true} />
      <NewExerciseForm />
      <ExerciseList />
    </Layout>
  );
}

export default App;
