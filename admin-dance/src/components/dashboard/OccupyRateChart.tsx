import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, IOccupyProps } from '../../interfaces/Dashboard';


const OccupyRateChart:React.FC<IOccupyProps> =({occupyRateList}) =>{

    const data: ChartData ={
        labels:occupyRateList?.labels,
        datasets: [
            {
              label: 'empty is the AVG amount',
              data: occupyRateList.datasets[0].data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
    };

    return(
        <>
        <Bar  data={data}/>
        </>
    );
};

export default OccupyRateChart;