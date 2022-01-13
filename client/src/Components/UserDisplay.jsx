import React,{useEffect,useState} from 'react'
import axios from 'axios'
import UsersCard from './UsersCard'

const UserDisplay = () => {

    const [data,setData] = useState([])

useEffect(() => {
    axios.get('http://localhost:3007/users')
      .then((response) => {
        const userData = response.data;
        console.log(userData)
        setData(userData);
      })
      .catch(function (error) {
        console.log(error);
      })
}, [])
    
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{marginBottom:'30px'}}>Users List</h1>
            <a href="/"><button type="button" class="btn btn-primary" style={{marginLeft:'30px',marginBottom:'30px'}}>Home</button></a>
            <div style={{marginLeft:'5rem',display:'grid',gridGap:'40px',gridTemplateColumns:'25rem 25rem 25rem 25rem'}}>
            {data.map(item =>{
                return <UsersCard {...item} />
            })}
            </div>
        </div>
    )
}

export default UserDisplay
