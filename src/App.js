// App.js

import { createContext, useState } from 'react';
import './App.css';
import UseReducer from './Review/UseReducer';
import UseMemo from './Review/UseMemo';
import UseRef from './Hooks/UseRef';
import Todo from './Review/Todo';
import About from './Review/About';
import RouterReg from './Router/RouterReg';
import ChildComponent from './ChildComponent';

function App() {
  
    const [datafromchild,setDatafromchild] = useState('');

    
    const handledata =(messege)=>{
        setDatafromchild(messege)
    }
    return (
        <div className="App">
            
            {/* <MyContext.Provider value={{value,setValue}}>
              <ChildComponent />
            </MyContext.Provider> */}
            {/*  < UseMemo /> */}
            {/* <Todo /> */}
          
            {/* < RouterReg/> */}
            <h>{datafromchild}</h>
            <ChildComponent sendmsg={handledata}/>
        </div>
    );
}

export default App;
