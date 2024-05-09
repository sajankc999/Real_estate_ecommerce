import React from 'react'
import { Navigate } from 'react-router-dom'
import Register from '../pages/Register'

export default function RegisterAndLogout() {
    localStorage.clear()
  return (
    <Register/>
  )
}
