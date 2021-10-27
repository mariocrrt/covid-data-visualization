import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const baseURL = process.env.REACT_APP_BASE_URL;

export function ChartComp() {
    const [data, setData] = useState(null);
    let dates = [];
    let percentage = [];

    const API_DATA = {
        labels: dates,
        datasets: [
            {
                label: "COVID Positivity Percentage",
                data: percentage,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                },
            },
        },
    };

    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setData(res.data);
        });
    }, []);

    if (!data) return null;

    for (let x of data.data) {
        dates.push(x.date);
        percentage.push(x.percentage_today);
    }

    return (
        <div className="row pt-5">
            <div className="chart-container col-md-12 pt-5 mt-5">
                <Line data={API_DATA} options={options} />
            </div>
        </div>
    );
}
