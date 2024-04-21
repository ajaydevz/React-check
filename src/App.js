// App.js

import './App.css';
// import UseReducer from './Review/UseReducer';
import UseMemo from './Review/UseMemo';
import UseRef from './Hooks/UseRef';
import Todo from './Test1.js/Todo';
import About from './Review/About';
import RouterReg from './Router/RouterReg';
import ChildComponent from './Green/ChildComponent';
import AddNum from './Calculator/AddNum';
import TwoCounter from './Test/TwoCounter';
import State from './Green/Stateless';
import Stateful from './Green/Stateful';
import Todos from './Test1.js/Todos';
import UseReducer from './Test/UseReducer';

import Purecomponent from './Test1.js/Purecomponent';


function App() {

  
    return (
        <div className="App">
            
            {/* <MyContext.Provider value={{value,setValue}}>
              <ChildComponent />
            </MyContext.Provider> */}
            {/*  < UseMemo /> */}
            {/* <Todo /> */}
            {/* < RouterReg/> */}
            {/* <RouterReg /> */}
            {/* <TwoCounter /> */}
            {/* <State /> */}
            {/* <Stateful/> */}
            {/* <ChildComponent name="hello," purpose=" hey from parent" /> */}
            {/* <MoreData {...props}/> */}
            {/* <Purecomponent /> */}
            <UseReducer />

        </div>
    );
}

export default App;
