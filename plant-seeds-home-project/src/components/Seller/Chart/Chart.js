import { BarChart, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from 'recharts';
import './Chart.scss';

const data = [
    { name: 'January', Total: 1200 },
    { name: 'February', Total: 2100 },
    { name: 'March', Total: 800 },
    { name: 'April', Total: 1600 },
    { name: 'May', Total: 900 },
    { name: 'June', Total: 1700 },
    { name: 'July', Total: 1000 },
    { name: 'August', Total: 1200 },
    { name: 'Septemper', Total: 1700 },
    { name: 'October', Total: 900 },
    { name: 'November', Total: 700 },
    { name: 'December', Total: 200 },
];

const Chart = ({ aspect, title }) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <BarChart
                    // width={1000}
                    // height={150}
                    data={data}
                    margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                >
                    {/* <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs> */}
                    <XAxis dataKey="name" stroke="gray" />
                    {/* <XAxis dataKey="Total" stroke="gray" className="" /> */}
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Bar dataKey="Total" fill="#82ca9d" />
                    {/* <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    /> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
