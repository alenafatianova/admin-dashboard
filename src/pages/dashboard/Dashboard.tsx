import React from 'react'
import { Header } from '../../components/header/Header'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard-content'>
      <Header 
        title='Dashboard'
        subtitle='Welcome to your dashboard!'
      />
      </div>
    
    </div>
  )
}
