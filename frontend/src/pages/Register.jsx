import React, { useState } from 'react'
import '../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import { ToastContainer, toast } from 'react-toastify';
export default function Register() {
  document.title='REGISTER'

  // const [data,setData]=useState({
  //   email:'',
  //   password:'',
  //   first_name:'',
  //   middle_name:'',
  //   last_name:'',
  //   phone_number:''
  //    })

  const [email,setEmail]= useState('')
  const [first_name,setfirstname]= useState('')
  const [middle_name,setmiddlename]=useState('')
  const [last_name,setlastname]=useState('')
  const [phone_number,setphonenumber]=useState('')
  const [password,setPassword]=useState('')
  const [Cpassword,setCpassword] = useState('')
  const navigate = useNavigate()
  
  
  
  const RegisterForm = async (e)=>{
      e.preventDefault()
     
        try {
          console.log(email,password)
          const res = await api.post('/api/user/register/',{
                'email':email,
                'password':password,
                'first_name':first_name,
                'middle_name':middle_name,
                'last_name':last_name,
                'phone_number':phone_number
          },{
            headers: {
              'Content-Type': 'application/json',
            },
          }
          ).then((response)=>console.log(response.data)).catch((error)=>alert(error.message))
          if(res.status===201){
  
              navigate('/login')
              
          
        }else{
  
          return <div class="alert alert-danger" role="alert">
          passwords didnt match
        </div>
      }

        } catch (error) {
          console.log(error)
          alert(error)
        }
      }
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h3 className='"card-title text-center"'>
              Register
            </h3>
            <div className="card-body py-md-4">
              <form  onSubmit={RegisterForm}>
                <div className='form-group'>
                  <input type="text" 
                  value={first_name}
                  onChange={(e)=>setfirstname(e.target.value)}
                  name='first name'
                  placeholder="first name" 
                  className='form-control'/>
                </div>

                <div className='form-group'>
                  <input type="text" 
                  value={middle_name}
                  name='middle name'
                  onChange={(e)=>setmiddlename(e.target.value)}
                  placeholder="middle name" className='form-control'/>
                </div>

                <div className='form-group'>
                  <input type="text" 
                  value={last_name}
                  name='last name'
                  onChange={(e)=>setlastname(e.target.value)}
                  placeholder="last name" className='form-control'/>
                </div>

                <div className='form-group'>
                  <input type="email" 
                  value={email}
                  name = 'email'
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='email' className='form-control'/>
                </div>
                <div className='form-group'>
                  <input type="text"
                  name='phone number' 
                  value={phone_number}
                  onChange={(e)=>setphonenumber(e.target.value)}
                  placeholder='phone number' className='form-control'/>
                </div>

                <div className='form-group'>
                  <input type="password"
                  name='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder='password' className='form-control'/>
                </div>
                <div className='form-group'>
                  <input type="password"
                  value={Cpassword}
                  onChange={(e)=>setCpassword(e.target.value)}
                  placeholder='confirm password' className='form-control'/>
                </div>

                <div className='d-flex flex-row align-items-center justify-content-between '>
                <Link to="/login">Login</Link>
                  <button type="submit" value="register" className="btn btn-primary" >Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
