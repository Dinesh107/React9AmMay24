import logo from './logo.svg';
import './App.css';
import Welcome from './components/WelcomeFunctionalCompPractice';
import WelcomeStudents from './components/WelcomeClassCompPractice';


function App() {
  return (
    <div className="App">
       {/* <Welcome/> */}
        <WelcomeStudents/>
        <WelcomeStudents/>
        <WelcomeStudents/>
       
    </div>
  );
}

export default App;
