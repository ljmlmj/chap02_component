import './App.css';
import Hello from './component/Hello';
import styles from "./App.module.css";
import EventTest from './component/EventTest';
import StateTest from './component/StateTest';
import UseEffectTest from './component/UseEffectTest';
import Counter from './component/Counter';
import Props1 from './component/Props1';
import PropsParent from './component/PropsParent';
import LoginRendering from './component/LoginRendering';
import ListExample from './component/ListExample';
import FormExample from './component/FormExample';
import FormExample2 from './component/FormExample2';
import UserForm from './component/UserForm';

function App() {
  return (
    <div className={styles.box}>
      <h1>App</h1>
      <Hello />
      <br></br>
      <EventTest />
      <br></br>
      <StateTest />
      <br></br>
      <UseEffectTest />
      <br></br>
      <Counter />
      <br />
      <Props1 subject="자바"/>
      <br />
      <PropsParent />
      <br />
      <LoginRendering />
      <br></br>
      <ListExample />
      <br></br>
      <FormExample />
      <br></br>
      <FormExample2 />
      <br></br>
      <UserForm />
    </div>

  );
}

export default App;
