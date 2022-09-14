import { Layout } from 'antd';
import DcycleLogo from '../../commonComponents/DcycleLogo/DcycleLogo';
import Navbar from '../../commonComponents/Navbar/Navbar';
import NameData from '../../components/NameData/NameData';
import style from './style';

const { Content } = Layout;

const NameInformationPage = () => {
  return (
    <Layout className="layout" style={style.layout}>
      <Navbar />
      <Content className="content" style={style.content}>
        <DcycleLogo />
        <NameData />
      </Content>
    </Layout>
  );
};

export default NameInformationPage;
