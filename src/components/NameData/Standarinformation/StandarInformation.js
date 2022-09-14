import { hasFlag } from 'country-flag-icons';
import PropTypes from 'prop-types';
import { Descriptions, Empty } from 'antd';
import style from './style';

const StandarInformation = ({ info }) => {
  if (!info) {
    return <Empty style={style.empty} />;
  }

  const nationalizeInfo = info.nationalize.country.map((country) => [
    <Descriptions.Item label="Pais" key={country.country_id} span={1}>
      {country.country_id}
    </Descriptions.Item>,
    <Descriptions.Item
      label={`Probabilidad de ${country.country_id}`}
      key={country.country_id}
      span={1}
    >
      {Number(country.probability).toFixed(3)}
    </Descriptions.Item>,
    <Descriptions.Item
      label={`Icono de ${country.country_id}`}
      key={country.country_id}
      span={1}
    >
      {hasFlag(country.country_id) && (
        <img
          alt={country.country_id}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.country_id}.svg`}
          width="96"
          height="31"
        />
      )}
    </Descriptions.Item>,
  ]);

  return (
    <Descriptions title={info.agify.name} bordered style={style.description}>
      <Descriptions.Item label="Edad más probable" span={3}>
        {info.agify.age}
      </Descriptions.Item>
      <Descriptions.Item label="Género" span={2}>
        {info.genderize.gender}
      </Descriptions.Item>
      <Descriptions.Item label="Probabilidad del género" span={1}>
        {info.genderize.probability}
      </Descriptions.Item>
      {nationalizeInfo.map((element) => element)}
    </Descriptions>
  );
};

StandarInformation.propTypes = {
  info: PropTypes.shape({
    agify: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
    }),
    genderize: PropTypes.shape({
      gender: PropTypes.string,
      probability: PropTypes.number,
    }),
    nationalize: PropTypes.shape({
      country: PropTypes.arrayOf(
        PropTypes.shape({
          country_id: PropTypes.string,
          probability: PropTypes.number,
        }),
      ),
    }),
  }),
};

StandarInformation.defaultProps = {
  info: null,
};

export default StandarInformation;
