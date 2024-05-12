import { useState,useEffect } from "react";
import BarChart from "../Charts/BarChart";
import { getDayToDayStatsAction } from "../../redux/features/books/getDayToDayCountSlice";
import { useDispatch, useSelector } from "react-redux";

const Summary = () => {
  const dispatch =useDispatch()
  const {dailyStats,isLoading,isSuccess,isError} = useSelector((state)=>state.dailyCount)
  console.log("dailyStats",dailyStats)
  
  useEffect(()=>{
    dispatch(getDayToDayStatsAction())
  },[])
  const formattedData = dailyStats&& dailyStats?.counts.map((item,i)=>({
    date:item?.date,
    count: parseInt(item?.count)
  }))
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
    labels:formattedData?.map(item =>item.date),
    datasets: [
      {
        label: "books borrowed",
        data: formattedData?.map(item=>item.count),
        backgroundColor: ["#1e3a8a"],
        borderColor: ["rgb(201, 203, 207)"],
        borderWidth: 1,
        barThickness: 40,
        barPercentage:0.5,
        barSpacing:2
      },
    ],
  }

  // useEffect(() => {
  //   setBarData({
  //     labels: [
  //       "Sep 10",
  //       "Sep 11",
  //       "Sep 12",
  //       "Sep 13",
  //       "Sep 14",
  //       "Sep 15",
  //       "Sep 16",
  //     ],
  //     datasets: [
  //       {
  //         label: "",
  //         data: [40, 20, 60, 140, 100, 120, 80],
  //         backgroundColor: ["#1F2B5B"],
  //         borderColor: ["rgb(201, 203, 207)"],
  //         borderWidth: 1,
  //         barThickness: 10,
  //         borderRadius: 10,
  //       },
  //     ],
  //   })
  // }, [])
  
  
  return (
    <div className='w-2/3 bg-white h-[400px] p-4'>
      <div className="flex justify-between">
        <h2 className="text-md text-blue-900 font-bold">Summary</h2>
        {/* <div className="flex gap-2">
            <button className="bg-blue-400 text-white  w-20 text-sm rounded-md ">week</button>
            <button  className=" bg-gray-100 text-blue-400 py-1 w-20 text-sm rounded-md ">month</button>
            <button  className="bg-gray-100 text-blue-400 py-1 px-4 text-sm rounded-md ">year</button>
            <button  className="bg-gray-100 text-blue-400 py-1 px-4 text-sm rounded-md ">All</button>
        </div> */}
      </div>
      {
        isLoading ? (<h2>Loading...</h2>):(dailyStats &&dailyStats.counts.length > 0 &&
      <BarChart data={data} options={options} />)
      }{
        isError && <div>Something went wrong,please try again</div>
      }
    </div>
  );
}

export default Summary;
