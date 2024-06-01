import React from 'react';
import { Line } from 'react-chartjs-2';

const LikelihoodLineChart = ({ serverData }) => {
    const likelihoodByCountry = serverData.reduce((acc, item) => {
        const country = item.country;
        if(country) {
        if (!acc[country]) {
            acc[country] = 0;
        }
        acc[country] += item.likelihood;
    }
        return acc;
    }, {});

    const labels = Object.keys(likelihoodByCountry);
    const values = Object.values(likelihoodByCountry);

    return (
        <div style={{ height: '50vh' }}>
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Likelihood by Country',
                            data: values,
                            borderWidth: 1,
                            backgroundColor: 'rgba(255, 92, 2, 0.2)',
                            borderColor: 'rgba(255, 92, 2, 1)',
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

export default LikelihoodLineChart;
