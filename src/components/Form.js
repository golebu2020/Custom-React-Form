import React from 'react'


const Form =()=>{
  
  const [formData, setformData] = React.useState({
    email:"",
    password:"",
    confirmPassword:"",
    joinNewsletter:true
    
  })


  console.log(formData)

  const handleChange=(event)=>{
    // name, value, checked ==> Destruccturing
    const {name, value, checked} = event.target
    setformData(prevFormData=>{
      return {
        ...prevFormData,   
        [name]:name==='joinNewsletter'? checked : value
      }
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    let message = formData.password === formData.confirmPassword ? "Successfully signed up":"Password do not match"
    console.log(message)
    if (formData.joinNewsletter) 
      console.log("Thanks for signing up for our newsletter")
    
  }



  return (
    <form className='form' onSubmit={handleSubmit}>
      <input value={formData.email} onChange={handleChange} name='email' className='form--input' type="email" placeholder='Email' required={true}/>
      <input value={formData.password} onChange={handleChange} name='password' className='form--input' type="password" placeholder='Password' required={true} />
      <input value={formData.confirmPassword} onChange={handleChange} name='confirmPassword' className='form--input' type="password" placeholder='Confrim Password' required={true} />
      <div className='form--newsletter--div'>
        <input checked={formData.joinNewsletter} onChange={handleChange} name='joinNewsletter' type="checkbox" id='newsletter' />
        <label htmlFor="newsletter">I want to join the newsletter</label>
      </div>
      <button className='form--input btn--submit'>Signup</button>
    </form>
  )
}

export default Form