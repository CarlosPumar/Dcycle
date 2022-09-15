import { useContext } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Layout, Descriptions, Empty } from 'antd';
import moment from 'moment';
import { dateFormat } from '../../../utils/constants';
import style from './style';
import { langContext } from '../../../context/LangContext';

const { Content } = Layout;

const CovidOneDayData = ({ oneDayData, onChange, defaultDate }) => {
  const language = useContext(langContext);

  return (
    <Content className="content" style={style.content}>
      <DatePicker
        defaultValue={moment(defaultDate, dateFormat)}
        format={dateFormat}
        onChange={onChange}
        style={style.dataPicker}
      />
      {oneDayData && (
        <Descriptions
          title={
            <p>
              {language.t('DayInformation')}{' '}
              <span style={style.span}>{oneDayData.date}</span>
            </p>
          }
          bordered
          style={style.description}
        >
          <Descriptions.Item label={language.t('Hospitalized')} span={3}>
            {oneDayData.outcomes.hospitalized.currently.value}
          </Descriptions.Item>
          <Descriptions.Item label={language.t('InICU')} span={3}>
            {oneDayData.outcomes.hospitalized.in_icu.currently.value}
          </Descriptions.Item>
          <Descriptions.Item label={language.t('OnVentilator')} span={3}>
            {oneDayData.outcomes.hospitalized.on_ventilator.currently.value}
          </Descriptions.Item>
        </Descriptions>
      )}
      {!oneDayData && <Empty />}
    </Content>
  );
};

CovidOneDayData.propTypes = {
  onChange: PropTypes.func,
  defaultDate: PropTypes.string,
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

CovidOneDayData.defaultProps = {
  oneDayData: null,
  onChange: null,
  defaultDate: '2021-01-01',
};
export default CovidOneDayData;
