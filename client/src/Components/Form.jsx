import React,{useState} from 'react'

const Form = () => {
    const [Inputs,setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Inputs);
    }

    return (
        <>
        <h1>Registration form</h1>
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
                <input type='file' style={{marginLeft:'20px'}} required />
            </div>
                <button style={{marginTop:'20px'}}type="submit"> Submit </button>
        </form>
        </>
    )
}

export default Form
