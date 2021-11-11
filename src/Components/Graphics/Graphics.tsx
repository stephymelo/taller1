import * as React from 'react';
import { Bar } from 'react-chartjs-2'
import './Graphics.css';
import ChartOptions from "react-chartjs-2";
import { ShortElemObj } from '../../Types/ShortElemObj';
import { GetReviewNum } from '../../Utils/GetReviewNum';
;

interface Graphics {
  list: ShortElemObj[];

}

const Graphics: React.FC<Graphics> = ({ list }) => {



  let labels: string[] = [];
  list.forEach(item => {
    labels.push(item.title);
  })

  let datas: number[] = [];
  list.forEach(item => {
    datas.push(GetReviewNum(item.review));
  })



  const ctx = document.getElementById("myChart");
  const data = ({
    labels: labels,
    
        datasets: [
          {
            label: '',
            data: datas,
            backgroundColor: [
              'rgba(106, 131, 166,0.2)',
              'rgba(74, 110, 161, 0.2)',
              'rgba(26, 67, 125, 0.2)',
              'rgba(106, 131, 166,0.2)',
              'rgba(74, 110, 161, 0.2)',
              'rgba(26, 67, 125, 0.2)',
              'rgba(106, 131, 166,0.2)',
              'rgba(74, 110, 161, 0.2)',
              'rgba(26, 67, 125, 0.2)',
              'rgba(106, 131, 166,0.2)',
              'rgba(74, 110, 161, 0.2)',
              'rgba(26, 67, 125, 0.2)',
            ],
            highlightFill: 'rgba(151,187,205,0.75)',
            hoverBackgroundColor:'rgba(151,187,205,0.75)',
            padding: 2,
            // scales: {
            //   yAxes: [{
            //     ticks: {
            //       beginAtZero: true
            //     }
            //   }]
            // }


          },
          
          
        ],
      });




      return<div>
        < h1 className="reviewTitle" > Shortfilm Reviews</h1>
        <div className="graphContainer">
        <Bar className="graph" data={data} />

        </div>
  
    {/* <canvas id="myChart" width="400" height="200"></canvas> */}

    </div >
    
}

export default Graphics;