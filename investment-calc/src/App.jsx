import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/header.jsx';

// use useState to manage the state of the selected topic
// setSelectedTopic is the function that will update the state but only after the component is re-rendered
function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;