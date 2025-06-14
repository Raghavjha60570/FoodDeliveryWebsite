import React ,{useState} from 'react';

function myComponent(){
   
    const [name , setName ]= useState();
    return (<>
    <div>
        <p>Name : {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
    </>)
}

export default myComponent;