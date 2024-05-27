import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = [
            { month: 'Jan', count: 0 },
            { month: 'Feb', count: 1 },
            { month: 'Mar', count: 2 },
            { month: 'Apr', count: 3 },
            { month: 'May', count: 4 },
            { month: 'Jun', count: 5 },
            { month: 'Jul', count: 6 },
            { month: 'Aug', count: 7 },
            { month: 'Sep', count: 8 },
            { month: 'Oct', count: 9 },
            { month: 'Nov', count: 10 },
            { month: 'Dec', count: 11 },
        ];

        const ctx = chartRef.current;

        if (ctx) {
            if (ctx.chart) {
                ctx.chart.destroy(); // Destroy previous chart instance if it exists
            }

            ctx.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.month),
                    datasets: [
                        {
                            label: 'Your Donation Chart',
                            data: data.map(row => row.count),
                        },
                    ],
                },
            });
        }

        return () => {
            if (ctx && ctx.chart) {
                ctx.chart.destroy(); // Cleanup chart instance on component unmount
            }
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <div>
            <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
    );
};

export default BarChart;
