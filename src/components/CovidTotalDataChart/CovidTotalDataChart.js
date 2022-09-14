import zoomPlugin from 'chartjs-plugin-zoom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { chartOptions } from '../../utils/options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
);

const CovidTotalDataChart = ({ covidData }) => {
  const labels = useMemo(
    () => covidData.map((info) => info.date).reverse(),
    [covidData],
  );
  const dataY = useMemo(
    () => covidData.map((info) => info.cases.total.value).reverse(),
    [covidData],
  );
  const dataY1 = useMemo(
    () => covidData.map((info) => info.testing.total.value).reverse(),
    [covidData],
  );
  const dataY2 = useMemo(
    () => covidData.map((info) => info.outcomes.death.total.value).reverse(),
    [covidData],
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Casos',
        data: dataY,
        borderColor: 'rgb(148, 41, 254)',
        backgroundColor: 'rgba(104, 6, 202, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Pruebas',
        data: dataY1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Muertes',
        data: dataY2,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y2',
      },
    ],
  };

  if (!covidData) {
    return null;
  }
  return <Line options={chartOptions} data={data} />;
};

CovidTotalDataChart.propTypes = {
  covidData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      cases: PropTypes.shape({
        total: PropTypes.shape({
          value: PropTypes.number,
        }),
      }),
      testing: PropTypes.shape({
        total: PropTypes.shape({
          value: PropTypes.number,
        }),
      }),
      outcomes: PropTypes.shape({
        cases: PropTypes.shape({
          total: PropTypes.shape({
            value: PropTypes.number,
          }),
        }),
      }),
    }),
  ),
};

CovidTotalDataChart.defaultProps = {
  covidData: null,
};

export default CovidTotalDataChart;
