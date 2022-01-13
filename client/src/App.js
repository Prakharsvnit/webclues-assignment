import React from 'react'

const App = () => {
  return (
    <div style={{textAlign: 'center',marginTop: '30px'}}>
      <h1>Registration</h1>
      <div style={{marginTop:'30px'}}>
        <a href="/create-user"><button type="button" class="btn btn-primary" style={{marginRight:'30px'}}>Create User</button></a>
        <a href="/users"><button type="button" class="btn btn-primary" style={{marginLeft:'30px'}}>Users List</button></a>
      </div>
    </div>
  )
}

export default App
