import React from 'react';
import { Line } from 'react-chartjs-2';

const LikelihoodByRegionChart = ({ serverData }) => {
    const likelihoodByRegion = serverData.reduce((acc, item) => {
        const region = item.region;
        if (region) {
            if (!acc[region]) {
                acc[region] = 0;
            }
            acc[region] += item.likelihood;
        }
        return acc;
    }, {});

    const labels = Object.keys(likelihoodByRegion);
    const values = Object.values(likelihoodByRegion);

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Likelihood by Region',
                            data: values,
                            borderWidth: 1,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
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

export default LikelihoodByRegionChart;
