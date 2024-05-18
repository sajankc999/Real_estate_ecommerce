import React, { useState } from 'react'
import Form from '../components/Form'
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css"
export default function Login() {
  document.title ='Login'
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault()
    try {
      
      const res = await api.post('/api/token/', { email, password }).catch((err)=>console.log(err))
      localStorage.setItem(ACCESS_TOKEN, res.data.access)
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
      // console.log(res.data.access )
      navigate('/feed')
      

     
    } catch (error) {
      console.log(error)
      alert(error  )
    }
  }
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <div className='card'>
            <h2 className='card-title text-center'>Login</h2>
            <div className="card-body py-md-4">
              <form onSubmit={formHandler} >
                <div className='form-group'>
                  <input type="email" value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder='email'
                    className='form-control' />
                </div>
                <div className='form-group'>
                  <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='form-control' />
                </div>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                  <div>
                    <span><p>don't have an id?</p></span>
                    <Link to='/register'>register</Link>
                  </div>
                  <button type='submit'>login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

