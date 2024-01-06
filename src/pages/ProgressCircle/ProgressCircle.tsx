import React from 'react'

export const ProgressCircle = ({ progress = '0.75', size = '40'}) => {

    const angle = Number(progress) * 360

  return (
    <div style={{
        background: `radial-gradient(${'#101624'} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, #868dfb ${angle}deg 360deg),
        #4cceac`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`
    }}>

    </div>
  )
}
