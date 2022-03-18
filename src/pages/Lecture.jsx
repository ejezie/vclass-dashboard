import React from 'react'

import Nav from '../components/Nav'
import Form from '../components/Form'
import Contenttwo from '../components/Contenttwo';

function Lecture() {

 const btnAction = (e) => {
   e.preventDefault();
 };

  return (
    <div className="page">
      <Nav />
      <Form
        option={"Past lectures"}
        btnAction={btnAction}
        btnText={"Schedule lecture"}
      />
      <Contenttwo/>
      <Contenttwo/>
    </div>
  );
}

export default Lecture