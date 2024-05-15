import React, { useState } from 'react'
import api from '../api'
import PropertyForm from '../components/PropertyForm'

export default function AddProperty() {
  document.title ='ADD-Property'
  return (
    <div>
      <PropertyForm />
    </div>
  )
}
