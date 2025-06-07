import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { label: 'CHN', data: [40, 30, 60, 45, 70, 55], backgroundColor: '#a78bfa' },
      { label: 'USA', data: [35, 25, 55, 40, 60, 45], backgroundColor: '#f87171' },
      { label: 'UK', data: [25, 15, 45, 30, 50, 35], backgroundColor: '#60a5fa' },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
