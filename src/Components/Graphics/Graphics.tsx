import * as React from 'react';
import { Bar } from 'react-chartjs-2'
import ChartOptions from "react-chartjs-2";
import { ShortElemObj } from '../../Types/ShortElemObj';
import { GetReviewNum } from '../../Utils/GetReviewNum';
;

interface Graphics {
  list: ShortElemObj[];

}

const Graphics : React.FC<Graphics> = ({list}) => {

  
  
    let labels : string[] = [];
    list.forEach( item => {
      labels.push(item.title);
    })
    
    let datas : number[] = [];
    list.forEach( item => {
      datas.push(GetReviewNum(item.review));
    })
  

  

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Average of Votes',
            data: datas,
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
      
    


    return <div>
        <h1>Estadisticas de los Shorts</h1>
        <Bar data={data}  />

    </div>
    
}

export default Graphics;