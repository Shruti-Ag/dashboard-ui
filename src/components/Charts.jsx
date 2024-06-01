import React from "react";

import BarChart from "../charts/BarChart";
import PolarChart from "../charts/PolarChart";
import LineChart from "../charts/LineChart";
import RadarChart from "../charts/RadarChart";
import DoughnutChart from "../charts/DoughnutChart";
import IntensityBarChart from "../charts/IntensityBarChart";
import LikelihoodLineChart from "../charts/LikelyhoodLineChart";
import RelevanceChart from "../charts/RelevanceChart";
import LikelihoodByRegionChart from "../charts/LikelihoodByRegionChart";
import LikelihoodByCityChart from "../charts/LikelihoodByCityChart";

const Charts = ({ data }) => {
    return (
        <div>
            <div>
                <div style={{ border: "1px solid"}}>
                    <IntensityBarChart serverData={data} />
                </div>
            </div>

            <div>
                <div style={{ border: "1px solid", marginTop: "15px" }}>
                    <LikelihoodLineChart serverData={data} />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ border: "1px solid", marginTop: "15px" }}>
                    <LikelihoodByRegionChart serverData={data} />
                </div>

                <div style={{ border: "1px solid", marginTop: "15px" }}>
                    <LikelihoodByCityChart serverData={data} />
                </div>
            </div>

            <div>
            <div style={{ border: "1px solid", marginTop: "15px" }}>
                    <RelevanceChart serverData={data} />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ border: "1px solid", marginTop: "15px" }}>
                    <DoughnutChart serverData={data} />
                </div>

                <div style={{ border: "1px solid", marginTop: "15px" }}>
                    <RadarChart serverData={data} />
                </div>
            </div>

            <div style={{ border: "1px solid", marginTop: "15px" }}>
                <BarChart serverData={data} />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                }}
            >
                <div style={{ border: "1px solid" }}>
                    <PolarChart serverData={data} />
                </div>

                <div style={{ border: "1px solid" }}>
                <LineChart serverData={data} />
                </div>
            </div>
        </div>
    );
};

export default Charts;
