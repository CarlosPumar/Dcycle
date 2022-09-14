import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import { get as getCovidData } from '../../services/API/covid';
import CovidOneDayInformationLayout from '../../components/CovidOneDayInformationLayout/CovidOneDayInformationLayout';
import style from './style';

const CovidOneDayInformationPage = () => {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    getCovidData().then((newCovidData) => setCovidData(newCovidData));
  }, []);

  return (
    <Layout className="layout" style={style.layout}>
      <Navbar />
      {covidData && (
        <CovidOneDayInformationLayout covidData={covidData?.data} />
      )}
    </Layout>
  );
};

export default CovidOneDayInformationPage;
