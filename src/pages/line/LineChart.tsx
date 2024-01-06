import React from 'react'
import { theme as antdTheme } from 'antd'
import { mockLineData } from '../../data/mockLineData'
import { ResponsiveLine } from '@nivo/line'
import './LineChart.css'

type LineChartType = {
  isDashboard: boolean
}

export const LineChart: React.FC<LineChartType> = ({ isDashboard }) => {

  const { useToken } = antdTheme
  const { token: theme } = useToken()

  return (
    <div className='linechart-wrapper'>
       <ResponsiveLine
        data={mockLineData}
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
        colors={{datum: 'color'}}
        margin={isDashboard ? {top: 0, right: 220, bottom: 0, left: 100} : { top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickValues: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
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
