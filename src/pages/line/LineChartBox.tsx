import React from 'react'
import { Header } from '../../components/header/Header'
import './LineChart.css'
import { LineChart } from './LineChart'

export const LineChartBox: React.FC = () => {

  return (
    <div className='linechart-wrapper'>
      <Header title='Linechart' subtitle='Linechart graphics'/>
       <LineChart isDashboard={false} />
    </div>
  )
}
