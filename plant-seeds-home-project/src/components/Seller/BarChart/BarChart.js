import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import './BarChart.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ title, data }) => {
    const data1 = [
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
    const state = {
        labels: data1.map((r) => r.name),
        datasets: [
            {
                label: 'Total',
                data: data1.map((r) => r.Total),
                backgroundColor: '#3f7652',
            },
        ],
        options: {},
    };

    return (
        <div className="chart">
            <div className="title">{title}</div>
            <Bar data={state} />
        </div>
    );
};

export default BarChart;
