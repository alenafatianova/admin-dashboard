import React from 'react'
import './GeoChart.css'
import { ResponsiveChoropleth } from '@nivo/geo'
import { mockGeographyData } from '../../data/mockGeoData'
import { theme as antdTheme } from 'antd'
import { geoFeatures } from '../../data/mockGeofeatures'

export const GeoChart: React.FC = () => {

  const { useToken } = antdTheme
  const { token: theme } = useToken()

  return (
    <div className='geo-wrapper'>
      <ResponsiveChoropleth
        data={mockGeographyData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.purple2
              }
            },
            legend: {
              text: {
                fill: theme.purple2
              }
            },
            ticks: {
              line: {
                stroke: theme.purple2,
                strokeWidth: 1
              },
              text: {
                fill: theme.purple2
              }
            }
          },
          legends: {
            text: {
              fill: theme.purple2
            }
          }
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}
