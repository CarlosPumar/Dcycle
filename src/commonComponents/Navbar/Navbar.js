import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import style from './style';

const Navbar = () => {
  const items = [
    {
      label: <Link to="/name">Nombre</Link>,
      key: 'name',
    },
    {
      label: 'Covid',
      key: 'covid',
      children: [
        {
          label: (
            <Link to="/covid/generalInformation">Información general</Link>
          ),
          key: 'generalInformation',
        },
        {
          label: <Link to="/covid/oneDayInformation">Información 1 día</Link>,
          key: 'oneDayInformation',
        },
      ],
    },
  ];

  return <Menu mode="horizontal" items={items} style={style.menu} />;
};

export default Navbar;
