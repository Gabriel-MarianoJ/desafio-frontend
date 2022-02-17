import Chart from "react-apexcharts";

const LineChart = () => {
  const mockData = {
    labels: {
      categories: [
        "8/2/22 - 14:46",
        "8/2/22 - 14:47",
        "8/2/22 - 14:48",
        "8/2/22 - 14:49",
        "8/2/22 - 14:50",
        "8/2/22 - 14:51",
        "8/2/22 - 14:52",
        "8/2/22 - 14:53",
        "8/2/22 - 14:54",
        "8/2/22 - 14:55",
        "8/2/22 - 14:56",
        "8/2/22 - 14:57",
        "8/2/22 - 14:58",
        "8/2/22 - 14:59",
        "8/2/22 - 15:00",
      ],
    },
    series: [
      {
        name: "mm / s",
        data: [
            2.13, 1.23, 0.33, 0.61, , 0.82, 1.54, 3.54, 4.98, 4.32, 3.21,
          2.79, 3.02, 4, 4.76,],
      },
    ],
  };

  const options = {
    chart: {
        foreColor: '#FFF'
    },
    dataLabels: {
      enabled: true,
    },              
    stroke: {
      curve: "straight",
    },
    xaxis: {
        categories: mockData.labels.categories,
        labels: {
            style: {
                colors: '#FFF'
            }
        }
    },
    colors: ["#32c2a8"],
  };

  return (
    <>
      <h2 className="text-white">Avanço</h2>
      <h6 className="text-white">Últimos 15 minutos</h6>
      <Chart
        options={{ ...options }}
        type="line"
        height="300"
        series={mockData.series}
      />
    </>
  );
};

export default LineChart;
