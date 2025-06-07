import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Search Engines', 'Direct Click', 'Bookmarks Click'],
    datasets: [{
      data: [30, 30, 40],
      backgroundColor: ['#60a5fa', '#34d399', '#f472b6'],
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
