import React from 'react'
import { Doughnut } from 'react-chartjs-2'

// import Chart from 'chart.js/auto'
import{Chart,ArcElement,Tooltip} from 'chart.js'
Chart.register(
  ArcElement,Tooltip
)


const Doughnet = () => {

    const data = {
        labels: ['on-going','completed','delayed'],
        datasets:[{
            label:'Projects',
            data:[5,3,2],
            backgroundColor:['#F6F95F','#64FF4A','#E99619']
        }]
    }



  return (
    <div>
      <div style={{width:'300px',height:'300px'}}>
        <h1>Overall Progress</h1>
        <Doughnut
            data = {data}
            // options={options}
        ></Doughnut>
      </div>
    </div>
  )
}

export default Doughnet
