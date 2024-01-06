import React from 'react'
import { ProgressCircle } from './ProgressCircle/ProgressCircle'
import './StatBox.css'

type StatBoxType = {
    title: string
    subtitle: string
    icon: React.ReactNode
    progress: string
    increase: string
    className: string
}

export const StatBox: React.FC<StatBoxType> = ({ title='', subtitle='', icon, progress='', increase='', className }) => {
  return (
    <div style={{width: '100%', margin: '0 30px'}} className={className}>
        <div style={{display: 'flex', justifyContent: 'space-between'}} >
            <div>
                {icon}
                <h4 className='h4'>{title}</h4>
            </div>
            <div>
                <ProgressCircle progress={progress} />
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h5 style={{color: '#3da58a', fontWeight: 'italic'}}>{subtitle}</h5>
            </div>
        </div>
    </div>
  )
}
