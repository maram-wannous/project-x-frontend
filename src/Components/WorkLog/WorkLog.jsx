import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import './WorkLog.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const WorkLog = () => {
    var data = {
        labels: ['Completed', 'On Hold', 'On Progress', 'Pending'],
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
    return (
        <div>
            <Doughnut data={data}/>
        </div>

    );
}
export default WorkLog;
