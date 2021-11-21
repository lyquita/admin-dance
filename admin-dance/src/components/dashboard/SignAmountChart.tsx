import React from 'react';
import { Bar} from 'react-chartjs-2';
import { ChartData,  ISignProps } from '../../interfaces/Dashboard';


const SignAmountChart:React.FC<ISignProps> = ({signAmountList}) =>{
    const data: ChartData ={
        labels:signAmountList?.labels,
        datasets: [
            {
              label: 'empty is the AVG amount',
              data: signAmountList.datasets[0].data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                '#a8c721',
                '#40ffef',
              ],
              borderWidth: 1,
            },
          ],
    };

    return(
        <>
        <Bar data={data} />
        </>
    );
};

export default SignAmountChart;