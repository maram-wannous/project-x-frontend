import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './Performance.css';
// ResponsiveContainer


export const Performance = () => {
    // Define your chart data and options
    const data = [
        {
            name: 'Oct 2021',
            Target: 3,
            Achieved: 2,
        },
        {
            name: 'Nov 2021',
            Target: 12,
            Achieved: 10,
        },
        {
            name: 'Dec 2021',
            Target: 4,
            Achieved: 5,
        },
        {
            name: 'Jan 2022',
            Target: 6,
            Achieved: 9,
        },
        {
            name: 'Feb 2022',
            Target: 7,
            Achieved: 0,
        },
        {
            name: 'Mar 2022',
            Target: 8,
            Achieved: 4,
        },
    ];
    // Custom Legend components to display filled dots
    const CustomLegend = ({color, value}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: 12, height: 12, backgroundColor: color, borderRadius: '50%', marginRight: 5}}></div>
            {value}
        </div>
    );

    return (
        <div className="RA-bgBlue">
            <div className="RA-bgWhite RA-MarginBoxProj ">
                <div className="">
                    <h1 className="RA-HeaderStyle font-weight-bold colorBlack">Performance</h1>
                    <div className="custom-chart mw-100">
                        <LineChart
                            width={500}
                            height={280}
                            className="mw-100"
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid vertical={false}/>
                            <XAxis dataKey="name"/>
                            <YAxis domain={[0, 12]}/>
                            <Tooltip/>
                            <Legend
                                content={(props) => (
                                    <div className="legend">
                                        <CustomLegend color="#ff8500" value="Achieved"/>
                                        <CustomLegend color="#a513ff" value="Target"/>
                                    </div>
                                )}
                            />
                            <Line type="monotone" dataKey="Achieved" stroke="#ff8500" strokeWidth={3}
                                  activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="Target" stroke="#a513ff" strokeWidth={3}/>
                        </LineChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
