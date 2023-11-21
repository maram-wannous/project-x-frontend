import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './TaskDash.css';
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

export function TaskDash() {
    const data = {
        labels: ['Product 5', 'Product 1', 'Product 4', 'Product 2'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgb(113, 170, 39)', // Green
                    'rgb(165, 19, 255)', // Move
                    'rgb(29, 94, 221)', // Blue
                    'rgb(255, 133, 0)', // Orange
                ],
                borderColor: [
                    'rgb(113, 170, 39)', // Green
                    'rgb(165, 19, 255)', // Move
                    'rgb(29, 94, 221)', // Blue
                    'rgb(255, 133, 0)', // Orange
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            datalabels: {
                color: 'white',
                anchor: 'center',
                align: 'center',
                formatter: (value, context) => {
                    return ((value / context.chart.data.datasets[0].data.reduce((a, b) => a + b) * 100).toFixed(1) + '%');
                },
            },
        },
        legend: {
            position: 'right', // Move the legend to the right
            labels: {
                generateLabels: function (chart) {
                    const {data} = chart;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map((label, i) => {
                            const dataset = data.datasets[0];
                            const backgroundColor = dataset.backgroundColor[i];
                            const labelColor = 'white'; // Set label color
                            return {
                                text: label,
                                fillStyle: backgroundColor,
                                hidden: isNaN(dataset.data[i]) || dataset.data[i] <= 0,
                                lineWidth: 1,
                                strokeStyle: dataset.borderColor[i],
                                lineCap: 'butt',
                                lineDash: [],
                                lineDashOffset: 0,
                                lineJoin: 'miter',
                                color: labelColor,
                            };
                        });
                    }
                    return [];
                },
            },
        },
    };
    return (
        <div >
          {/*  <div className="RA-bgBlue">
                <div className="RA-bgWhite RA-MarginBoxProj">
                    <h1 className="RA-HeaderStyle colorBlack">Tasks</h1>
                    <div className="text-center d-flex justify-content-center">*/}
            <Pie className="" data={data} options={options}/>
     {/*   </div>
                </div>
            </div>*/}
        </div>
    );
}
