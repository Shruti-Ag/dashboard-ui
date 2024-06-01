import React from 'react';
import { Bar } from 'react-chartjs-2';

const RelevanceBarChart = ({ serverData }) => {
    const relevanceByTopic = serverData.reduce((acc, item) => {
        const topic = item.topic;
        if (!acc[topic]) {
            acc[topic] = 0;
        }
        acc[topic] += item.relevance;
        return acc;
    }, {});

    const labels = Object.keys(relevanceByTopic);
    const values = Object.values(relevanceByTopic);

    return (
        <div style={{ height: '50vh' }}>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Relevance by Topic',
                            data: values,
                            backgroundColor: 'rgba(75, 192, 0, 0.2)', 
                            borderColor: 'rgba(75, 192, 0, 1)', 
                            borderWidth: 1,
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    indexAxis: 'x',
                    scales: {
                        x: {
                            beginAtZero: true,
                        },
                    },
                }}
                height={300}
            />
        </div>
    );
};

export default RelevanceBarChart;
