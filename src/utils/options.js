export const chartOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'EEUU acomulation covid data',
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        mode: 'x',
        speed: 100,
      },
      pan: {
        enabled: true,
        mode: 'x',
        speed: 100,
      },
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
    y2: {
      type: 'linear',
      display: false,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const dateFormat = 'YYYY-MM-DD';
