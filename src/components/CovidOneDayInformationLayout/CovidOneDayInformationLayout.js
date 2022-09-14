import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Row, Col, Layout } from 'antd';
import CovidOneDayData from './CovidOneDayData/CovidOneDayData';
import HospitalizedChart from './HospitalizedChart/HospitalizedChart';
import style from './style';

const { Content } = Layout;

const CovidOneDayInformationLayout = ({ covidData }) => {
  const [oneDayData, setOneDayData] = useState(null);

  useEffect(() => {
    setOneDayData(covidData[0]);
  }, [covidData]);

  const onChange = (_, dateString) => {
    setOneDayData(covidData.find((data) => data.date === dateString));
  };

  return (
    <Row>
      <Col xs={24} xl={12}>
        {covidData && (
          <CovidOneDayData
            oneDayData={oneDayData}
            onChange={onChange}
            defaultDate={covidData[0].date}
          />
        )}
      </Col>
      <Col xs={24} xl={12}>
        <Content className="content" style={style.content}>
          {covidData && <HospitalizedChart oneDayData={oneDayData} />}
        </Content>
      </Col>
    </Row>
  );
};

CovidOneDayInformationLayout.propTypes = {
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

CovidOneDayInformationLayout.defaultProps = {
  covidData: null,
};

export default CovidOneDayInformationLayout;
