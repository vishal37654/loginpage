import React, { useState } from "react"
import "./App.css"


const App=()=>{
const [formData,setFormData]= useState({
 username: '',
 email: '',
 password: '',
 confirmpassword: ''

});
const [errors,setErrors]= useState({})
const handleChange=(e)=>{
  const{name, value}=e.target
  setFormData({
   ...formData,[name]:value
  })

}
const handleSubmit=(e)=>{
e.preventDefault()
const validationErrors = {}
if(!formData.username.trim())
{
  validationErrors.username='username is required'
}
if(!formData.email.trim())
{
  validationErrors.email='Email is required'
}
else if(!/\S+@\S+\.\S+/.test(formData.email))
{
  validationErrors.email='Email is not valid'
}
if(!formData.password.trim())
{
  validationErrors.password='password is required'
}
else if(formData.password.length < 6)
{
  validationErrors.password = 'password should not be less than 6digits'
}
if(formData.confirmpassword !== formData.password)
{
  validationErrors.confirmpassword='Password should be same '
}

setErrors(validationErrors)
if(Object.keys(validationErrors).length === 0)
{
  alert('Form has been Submited')
}


}


  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <h1>Login Form</h1>
      </div>
  <div>
    <label>Username</label>
    <input
     type="Text" 
    placeholder="Enter Username"
    name="username"
    onChange={handleChange}
    autoComplete="off"
     ></input>
  {errors.username && <span>{errors.username}</span>}
  </div>


  <div>
    <label>email</label>
    <input type="Text" 
    placeholder="Enter email"
    name="email"
    onChange={handleChange}
    autoComplete="off"
     ></input>
     {errors.email && <span>{errors.email}</span>}
  </div>

  <div>
    <label>Password</label>
    <input 
     type="password" 
    placeholder="*******"
    name="password"
    onChange={handleChange}
     ></input>
     {errors.password && <span>{errors.password}</span>}
     
  </div>

  <div>
    <label>confirmPassword:</label>
    <input type="password" 
    placeholder="*******"
    name="confirmpassword"
    onChange={handleChange}
     ></input>
     {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
  </div>
  <button type="submit">Submit</button>
  
  
</form>
  )

  }

export default App;




