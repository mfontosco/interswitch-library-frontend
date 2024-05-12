import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const BarChart = ({ data, options}) => {
  return <Bar style={{  width: '50%', height: '50%' }} data={data} options={options} />
};

export default BarChart;
