import React from 'react';
import { Line } from 'react-chartjs-2';

const LikelihoodByCityChart = ({ serverData }) => {
    const likelihoodByCity = serverData.reduce((acc, item) => {
        const city = item.city;
        if (city) {
            if (!acc[city]) {
                acc[city] = 0;
            }
            acc[city] += item.likelihood;
        }
        return acc;
    }, {});

    const labels = Object.keys(likelihoodByCity);
    const values = Object.values(likelihoodByCity);

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Likelihood by City',
                            data: values,
                            borderWidth: 1,
                            backgroundColor: 'rgba(75, 55, 255, 0.2)',
                            borderColor: 'rgba(75, 55, 255, 1)',
                            fill: false,
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    }
                }}
                height={300}
            />
        </div>
    );
};

export default LikelihoodByCityChart;
