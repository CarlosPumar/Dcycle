import Layout from 'antd/lib/layout/layout';
import { useEffect, useState } from 'react';

import Navbar from '../../commonComponents/Navbar/Navbar';
import CovidTotalDataChart from '../../components/CovidTotalDataChart/CovidTotalDataChart';
import { get as getCovidData } from '../../services/API/covid';

import style from './style';

const CovidLineInformationPage = () => {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    getCovidData().then((newCovidData) => setCovidData(newCovidData));
  }, []);

  return (
    <Layout className="layout" style={style.layout}>
      <Navbar />
      {covidData && <CovidTotalDataChart covidData={covidData?.data} />}
    </Layout>
  );
};

export default CovidLineInformationPage;
