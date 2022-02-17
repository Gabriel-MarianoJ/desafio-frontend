import Chart from "react-apexcharts";

const AreaChart = () => {
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
        name: "RPM",
        data: [
          100000, 99580, 97300, 91911, 91731, 99489, 85306, 96820, 100000,
          98764, 83854, 94392, 86197, 94391, 93871,
        ],
      },
    ],
  };

  const options = {
    chart: {
        foreColor: '#FFF'
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 7,
        inverseColors: false,
        opacityFrom: 10,
        opacityTo: 0,
        stops: [],
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
        categories: mockData.labels.categories,
        labels: {
            style: {
                colors: '#FFF'
            }
        }
    },
    colors: ["#713bb8"],
  };

  return (
    <>
      <h2 className="text-white">Rotação</h2>
      <h6 className="text-white">Últimos 15 minutos</h6>
      <Chart
        options={{ ...options }}
        type="area"
        height="300"
        series={mockData.series}
      />
    </>
  );
};

export default AreaChart;
