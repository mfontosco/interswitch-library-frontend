import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const DoughnutChart = ({ data, options}) => {
  return <Doughnut style={{  width: '50%', height: '50%' }} data={data} options={options} />
};

export default DoughnutChart;
