import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ClipLoader } from "react-spinners";
import { useQuery } from "react-query";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { HISTORCAL_CHART } from "../api";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const fetchHistoricalChart = ({ queryKey }) => {
  const [, id, days, currency] = queryKey;
  return axios.get(HISTORCAL_CHART(id, days, currency));
};
const Graph = ({ cryptoId, currency, days, name }) => {
  const { data: chart, isLoading } = useQuery(
    ["chart", cryptoId, days.value, currency],
    fetchHistoricalChart,
    {
      select: (chart) => {
        return chart.data.prices;
      },
    }
  );

  if (isLoading) {
    return (
      <div className={`grid w-full items-center justify-center`}>
        <ClipLoader color="rgba(113,63,18,0.9)" size={40} />
      </div>
    );
  }
  const labels = chart.map((item) => {
    const date = new Date(item[0]);
    return days.value === 1
      ? date.toLocaleTimeString("en")
      : date.toLocaleString("en", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        });
  });
  const data = {
    labels,
    datasets: [
      {
        label: `Price in ${days.value} days`,
        data: chart.map((item) => item[1]),
        backgroundColor: "#fff",
        borderColor: "rgba(113,63,18,0.9)",
        fill: false,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${name}`,
      },
    },
    elements: {
      point: {
        radius: 2.5,
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <>
      <div className="min-h-[75vh]">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default Graph;
