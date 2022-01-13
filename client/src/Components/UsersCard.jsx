import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import userImg from "../user.jpg"

const UsersCard = ({name, email}) => {
    return (
        <>
        <div style={{textAlign:'center'}}>
            <h1>Users List</h1>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div class="card" style={{width: "20rem"}}>
                <img src={userImg} class="card-img-top" alt="..." />
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name:{name}</li>
                    <li class="list-group-item">Email:{email}</li>
                </ul>
            </div>      
        </div>
      
    </>
    )
}

export default UsersCard
