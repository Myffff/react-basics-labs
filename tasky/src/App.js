import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>   
      <Task title="Dishes" deadline="Today" description=" Empty dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold Laundry and put away"/>
      <Task title="Tidy" deadline="Today"/>  
      {/* because there are no contents in the Task element, we use a self-closing tag here */}
    </div>
  );
}

export default App;
