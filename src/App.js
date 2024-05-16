import logo from './logo.svg';
import './App.css';
import Welcome from './components/WelcomeFunctionalCompPractice';
import WelcomeStudents from './components/WelcomeClassCompPractice';
import Information from './components/Information';
import CounterClassState from './components/CounterClassState';
import StudentsWelcomeConditionalIfElse from './components/StudentsWelcomeConditionalIfElse';
import StylePracticeInReact from './components/StylePracticeInReact';
import ProductsList from './components/ProductsList';


function App() {
  return (
    <div className="App">

      <ProductsList/>

      {/* <StylePracticeInReact heading1={true}/> */}

      {/* <StudentsWelcomeConditionalIfElse/> */}

      {/* <Welcome name="Ganesh" sportsName="Cricket"/> */}

      {/* <CounterClassState/> */}
    
       {/* <Information/>  */}
         
       {/* <Welcome/>
        <Welcome name="Ganesh" sportsName="Cricket">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum recusandae doloribus molestiae nostrum facere eligendi quaerat libero vero deleniti porro at architecto, quos, iure id repellendus alias fuga eveniet laborum!</p>
        </Welcome>
        <Welcome name="aslam" sportsName="Football">
           <button>Click Me</button>
        </Welcome> */}
        {/* <WelcomeStudents name="Ganesh" sportsName="Cricket"></WelcomeStudents>
        <WelcomeStudents name="aslam" sportsName="Football"></WelcomeStudents>
        <WelcomeStudents name="John" sportsName="Basketball"></WelcomeStudents> */}
    </div>
  );
}

export default App;
