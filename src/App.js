import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/WelcomeFunctionalCompPractice';
import WelcomeStudents from './components/WelcomeClassCompPractice';
import Information from './components/Information';
import CounterClassState from './components/CounterClassState';
import StudentsWelcomeConditionalIfElse from './components/StudentsWelcomeConditionalIfElse';
import StylePracticeInReact from './components/StylePracticeInReact';
import ProductsList from './components/ProductsList';
import FragmentsPractice from './components/FragmentsPractice';
import TableForFragmentsPractice from './components/TableForFragmentsPractice';
import PureComponentsPractice from './components/PureComponentsPractice';
import ParentCompPurePractice from './components/ParentCompPurePractice';
import NormalCompForPure from './components/NormalCompForPure';
import PureComponentDemo from './components/PureComponentDemo';
import Parent from './components/Parent';
import RefPractice from './components/RefPractice';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostData from './components/PostData';
import PostDataFromForm from './components/PostDataFromForm';
import CounterClassComp from './components/CounterClassComp';
import HooksCounterWithFuncComp from './components/HooksCounterWithFuncComp';
import UseEffectPractice from './components/UseEffectPractice';
import ComponentA from './components/ComponentA';
import CustomerAdd from './components/CustomerAdd';
import CustomerView from './components/CustomerView';
import ProductCallbackPractice from './components/ProductCallbackPractice';

export const UserContext = React.createContext();

function App() {

   const [product, setProduct] = useState(["Product1", "Product2"]);
   const [count, setCount] = useState(0);
   const [cart, setCart] = useState(0);

   const addToCart = useCallback(() => {
      console.log(cart);
      setCart(cart + 1);

   }, [cart]);

  return (
    <div className="App">
         
     <h1>React</h1>

       <div className="product-wrapper">
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}> Count </button>
            <h3>Cart:- {cart}</h3>
           { product.map((p, i) => {
                return <ProductCallbackPractice name={p}  addToCart={addToCart} key={i}/>
           }) 
           }
       </div>

      {/* <CustomerAdd/> */}

      {/* <UserContext.Provider value= {'Rohit'}>
      <ComponentA/>
      </UserContext.Provider> */}

      {/* <UseEffectPractice/> */}

      {/* <HooksCounterWithFuncComp/> */}

      {/* <CounterClassComp/> */}

      {/* <PostDataFromForm/> */}

      {/* <PostData/> */}

      {/* <ClickCounter/>
      <HoverCounter/> */}
      
      {/* <RefPractice/> */}
  
      {/* <Parent/> */}

      {/* <NormalCompForPure/>

      <PureComponentDemo/> */}

      {/* <ParentCompPurePractice/> */}

      {/* <PureComponentsPractice/> */}

      {/* <TableForFragmentsPractice/> */}

      {/* <FragmentsPractice/> */}

      {/* <ProductsList/> */}

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
