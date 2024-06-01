import React from 'react';
import { Bar } from 'react-chartjs-2';

const IntensityBarChart = ({ serverData }) => {
    const intensityByYear = serverData.reduce((acc, item) => {
        const year = item.end_year;
        if (!acc[year]) {
            acc[year] = 0;
        }
        acc[year] += item.intensity;
        return acc;
    }, {});

    const labels = Object.keys(intensityByYear);
    const values = Object.values(intensityByYear);

    return (
        <div style={{ height: '50vh' }}>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Intensity by End Year',
                            data: values,
                            borderWidth: 1,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
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

export default IntensityBarChart;
