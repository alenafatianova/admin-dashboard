import React from 'react'
import { Header } from '../../components/header/Header'
import { GeoChart } from './GeoChart'

export const GeoChartBox = () => {
  return (
    <div>
        <Header title='Geo chart' subtitle='Choropleth map' />
        <GeoChart />
    </div>
  )
}
