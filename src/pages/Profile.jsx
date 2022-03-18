import React from 'react'

import Nav from '../components/Nav'
import Form from '../components/Form'
import Contentone from '../components/Contentone'


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
      <Contentone/>
      <Contentone/>
    </div>
  );
}

export default Profile