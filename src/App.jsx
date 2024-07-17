import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Form from './component/Form';
import ListGroup from './component/ListGroup';


const App = () => {
 
  return (
    <>
     <Navbar/>
     <div className={"container-fluid p-5"}>
          <h1 className={'my-2 text-center display-3'}>React Todo</h1>
          <Form />
          <ListGroup  />
     </div>
    </>
  )
}

export default App;
