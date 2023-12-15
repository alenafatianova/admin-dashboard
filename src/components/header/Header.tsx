import React from 'react'
import './Header.css'

type HeaderType = {
    title: string
    subtitle: string
}
export const Header: React.FC<HeaderType> = ({ title, subtitle }) => {
  return (
    <div className='header-wrapper'>
        <h2 className='header-h2'>{title}</h2>
        <h5 className='header-h5'>{subtitle}</h5>
    </div>
  )
}
