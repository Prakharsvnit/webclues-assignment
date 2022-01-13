import React from 'react'
import axios from 'axios'
import UsersCard from './UsersCard'
const UserDisplay = () => {

 

    axios.get('http://localhost:3007/users')
      .then((response) => {

        const userData = JSON.stringify(response.data);
        console.log(userData)
      })
      .catch(function (error) {
        console.log(error);
      })

    return (
        <>
  
        </>
    )
}

export default UserDisplay
