import React from 'react'

import Nav from '../components/Nav'
import Form from '../components/Form'


function Profile() {

  const btnAction = (e) => {
    e.preventDefault()
  }

  return (
    <div className="page profile">
      <Nav />
      <Form
        option={"Past test"}
        btnAction={btnAction}
        btnText={"Schedule new test"}
      />
    </div>
  );
}

export default Profile