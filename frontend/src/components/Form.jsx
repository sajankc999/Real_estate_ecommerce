import React, { useState } from 'react'
import api from '../api';
import {useNavigate} from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
export default function Form({ route, method }) {
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate()
  const FormChange = async (e) => {
    e.preventDefault();
    try {
      const result = await api.post(route, { username, Password })
      if (method === 'login') {
        localStorage.setItem(ACCESS_TOKEN, result.data.access)
        localStorage.setItem(REFRESH_TOKEN, result.data.refresh)
        navigate("/feed")

      } else {
        navigate('/register')
      }

    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <form onChange={FormChange}>

        <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username' />

        <input type="password"
          required value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password' />

        <button type='submit'></button>
      </form>

    </div>
  )
}
