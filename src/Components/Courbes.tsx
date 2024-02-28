import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

type Props = {
  date: number[];
  pHcBleu: number[];
  pHpBleu: number[];
  pHcBlanc: number[];
  pHpBlanc: number[];
  pHcRouge: number[];
  pHpRouge: number[];
  mois: string;
};

const MaCourbe = ({ date, pHcBleu,pHpBleu,pHcBlanc,pHpBlanc,pHcRouge,pHpRouge,mois }: Props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Consommations ' + mois ,
      },
      
      maintainAspectRatio: true, // This allows you to set the height and width directly
      height: 600, // Set your desired height
      width: 600, // Set your desired width
    },
  };

  if (date === undefined || pHcBleu === undefined) {
    return <div>No data</div>;
  }

  const laDate = date.map((date) => new Date(date).toLocaleDateString().substring(0, 2));

  const data1 = {
    labels: laDate,
    datasets: [
      {
        label: `H C Bleues`,
        data: pHcBleu,
        borderColor: 'rgb(21, 99, 132)',
        backgroundColor: 'rgba(21, 99, 132,0.5)',
      },
      {
        label: `H P Bleues`,
        data: pHpBleu,
        borderColor: 'rgb(21, 19, 332,0.3)',
        backgroundColor: 'rgba(21, 19, 332, 1)',
      },
      {
        label: `H C Blanches`,
        data: pHcBlanc,
        borderColor: 'rgb(86,130,3)',
        backgroundColor: 'rgba(86,130,3,1)',
      },
      {
        label: `H P Blanches`,
        data: pHpBlanc,
        borderColor: 'rgb(27, 79, 8,0.5)',
        backgroundColor: 'rgba(27, 79, 8 )',
      },
      {
        label: `H C Rouges`,
        data: pHcRouge,
        borderColor: 'rgb(921, 99, 132)',
        backgroundColor: 'rgba(921, 99, 132,0.5)',
      },
      {
        label: `H P Rouges`,
        data: pHpRouge,
        borderColor: 'rgb(921, 19, 332,0.3)',
        backgroundColor: 'rgba(921, 19, 332, 1)',
      },
    ],
  };


  return (
    <div className='chart'>
      <Line style={{ background: 'wlightgrey'  , height:'500px ', width:'800px'}} 
      options={options} data={data1} />
    </div>
  )
}

export default MaCourbe;