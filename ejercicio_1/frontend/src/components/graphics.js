import { useMemo } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"

import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export const LineChart = (props) => {
    const scores = props.scores//[3, 3, 4, 50, 2, 1, 90, 20, 4, 90]
    const labels = props.labels//["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"]
    const options = {
        responsive: true,
        fill: props.fill || true,
        scales: {
            y: {
                min: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "mis datos",
                    data: scores,
                    tension: 0.01,
                    borderColor: props.borderColor || "rgb(58,125,131)",
                    pointRadius: props.pointRadius || 6,
                    pointBackgroundColor: props.pointBackgroundColor || "rgb(58,125,131)",
                    backgroundColor: props.backgroundColor || "rgba(214,230,254,.4)"
                },
            ],
            labels
        }
    }, []);

    return <Line data={data} options={options} />
}