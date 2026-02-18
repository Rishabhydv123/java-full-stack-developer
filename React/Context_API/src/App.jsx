 import { Counter } from "./Components/Counter";
 import { Button } from "./Components/Button";
 import { Dummy } from "./Components/Dummy";

 export const App = () => {
    return <>
    <h1>Hello</h1>
    <div 
     style={{
        display: 'flex',
        justifyContent: 'center',
        aligncontent: 'center',
        gap: 'gap',
       }}
       >
      <h1>Counter</h1>
      <Counter />
    </div>
    <Button />
    <Dummy />
    </>
 };
