import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({Children}) => {
const token = localStorage.getItem("accesToken")
if(!token){
    return<Navigate to="/login" replace />
}
  return Children;
}

export default Protected