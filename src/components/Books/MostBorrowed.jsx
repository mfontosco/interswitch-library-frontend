import React,{useState,useEffect} from 'react';
import DoughnutChart from '../Charts/DoughnutChart';

const MostBorrowed = () => {
  const [barChartData, setBarData] = useState();
  
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels: [
      "March 10",
      "March 11",
      "March 12",
      "March 13",
      "March 14",
      "March 15",
    ],
    datasets: [
      {
        label: "",
        data: [40, 20, 60, 70, 100, 80],
        backgroundColor: ["#D6589F"],
        borderColor: ["rgb(201, 203, 207)"],
        borderWidth: 1,
        barThickness: 20,
        borderRadius: 10,
      },
    ],
  }

  useEffect(() => {
    setBarData({
      labels: [
        "Sep 10",
        "Sep 11",
        "Sep 12",
        "Sep 13",
        "Sep 14",
        "Sep 15",
        "Sep 16",
      ],
      datasets: [
        {
          label: "",
          data: [40, 20, 60, 140, 100, 120, 80],
          backgroundColor: ["#1F2B5B"],
          borderColor: ["rgb(201, 203, 207)"],
          borderWidth: 1,
          barThickness: 10,
          borderRadius: 10,
        },
      ],
    })
  }, [])
  return (
    <div className='w-1/4 px-2 py-2 h-[300px] text-gray-500 rounded-sm bg-white'>
      <DoughnutChart data={data} />
    </div>
  );
}

export default MostBorrowed;
