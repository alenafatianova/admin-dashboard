import React from 'react'
import { Header } from '../../components/header/Header'
import { BarChart } from './BarChart'

export const BarChartBox = () => {
  return (
    <div>
        <Header title='Bar Chart' subtitle='Dynamically changing bar chart'/>
        <BarChart />
    </div>
  )
}
