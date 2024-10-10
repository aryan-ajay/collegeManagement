import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Attendance.css'; 

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Attendance = () => {
  const data = {
    labels: ['Physics', 'Chemistry', 'Mathe', 'Java Programming', 'Java Lab', 'Mini Projects', 'Engineering Graphics'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [90, 85, 75, 70, 95, 80, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Student Attendance',
        font: {
          size: 24,
        },
        color: '#333',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Attendance;
