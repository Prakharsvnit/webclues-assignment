import React,{useState} from 'react'
import axios from "axios"

const CreateUser = () => {
    const [Inputs,setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = () => {
        // console.log(Inputs);
        axios.post("http://localhost:3007/create-user",Inputs)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }



    return (
        <div style={{textAlign: 'center'}}>
        <h1>Registration form</h1>
        <a href="/"><button type="button" class="btn btn-primary" style={{marginLeft:'30px'}}>Home</button></a>
        <form onSubmit={handleSubmit} >
            <div style={{marginTop: '40px'}}>
            <label>Enter name:</label>
                <input 
                type="text"
                name="name"
                value={Inputs.name} 
                onChange={handleChange}
                style={{marginLeft: '20px'}}
                required/>
            </div>
            <div style={{marginTop:'20px'}}>
            <label>Enter email:</label>
                <input 
                type="email"
                name="email"
                value={Inputs.email} 
                onChange={handleChange}
                style={{marginLeft: '20px'}}
                required/>
            </div>
            <div style={{marginTop:'20px'}}>
            <label>Enter Password:</label>
                <input 
                type="password"
                name="password"
                value={Inputs.password} 
                onChange={handleChange}
                style={{marginLeft: '4px'}}
                required/>
            </div>
            <div style={{marginTop:'20px'}}>
                <label style={{marginTop:'20px',marginLeft: '100px'}}>Upload Profile Pic</label>
                <input type='file' style={{marginLeft:'20px'}}/>
            </div>
                <input type="submit" style={{marginTop:'20px'}}/>
        </form>
        </div>
    )
}

export default CreateUser
