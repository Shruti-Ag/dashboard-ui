import React from 'react';
import { Bar } from 'react-chartjs-2';

const CountryRegionBarChart = ({ serverData }) => {

    const countryRegionCounts = serverData.reduce((acc, item) => {
        const region = item.region;
        const country = item.country;
        
        if (!acc[region]) {
            acc[region] = {};
        }
        
        if (!acc[region][country]) {
            acc[region][country] = 0;
        }
        
        acc[region][country] += 1;
        
        return acc;
    }, {});

    const regions = Object.keys(countryRegionCounts);
    const countries = [...new Set(serverData.map(item => item.country))];

    const datasets = regions.map(region => {
        const data = countries.map(country => countryRegionCounts[region][country] || 0);
        return {
            label: region,
            data: data,
            backgroundColor: getRandomColor(), 
            borderColor: getRandomColor(),
            borderWidth: 1,
        };
    });

    return (
        <div style={{ height: '50vh' }}>
            <Bar
                data={{
                    labels: countries,
                    datasets: datasets
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    },
                }}
                height={300}
            />
        </div>
    );
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default CountryRegionBarChart;
