import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { langContext } from '../../../context/LangContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const HospitalizedChart = ({ oneDayData }) => {
  const language = useContext(langContext);

  if (!oneDayData) {
    return null;
  }

  const hospitalized = oneDayData.outcomes.hospitalized.currently.value;
  const inIcu = oneDayData.outcomes.hospitalized.in_icu.currently.value;
  const onVentilator =
    oneDayData.outcomes.hospitalized.on_ventilator.currently.value;
  const dataHospitalized = [
    hospitalized - inIcu - onVentilator,
    inIcu,
    onVentilator,
  ];
  const data = {
    labels: [
      language.t('OnlyHospitalized'),
      language.t('InICU'),
      language.t('OnVentilator'),
    ],
    datasets: [
      {
        label: 'Datos de 1 día Covid',
        data: dataHospitalized,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

HospitalizedChart.propTypes = {
  oneDayData: PropTypes.shape({
    date: PropTypes.string,
    outcomes: PropTypes.shape({
      hospitalized: PropTypes.shape({
        currently: PropTypes.shape({
          value: PropTypes.number,
        }),
        in_icu: PropTypes.shape({
          currently: PropTypes.shape({
            value: PropTypes.number,
          }),
        }),
        on_ventilator: PropTypes.shape({
          currently: PropTypes.shape({
            value: PropTypes.number,
          }),
        }),
      }),
    }),
  }),
};

HospitalizedChart.defaultProps = {
  oneDayData: null,
};

export default HospitalizedChart;
