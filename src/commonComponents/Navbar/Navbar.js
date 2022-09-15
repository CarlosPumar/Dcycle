import { useContext } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { langContext } from '../../context/LangContext';
import style from './style';

const Navbar = () => {
  const language = useContext(langContext);

  return (
    <div>
      <Menu mode="horizontal" style={style.menu}>
        <Menu.Item>
          <Link to="/name">{language.t('Name')}</Link>
        </Menu.Item>
        <Menu.SubMenu title="Covid">
          <Menu.Item>
            <Link to="/covid/generalInformation">
              {language.t('GeneralInformation')}
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/covid/oneDayInformation">
              {language.t('OneDayInformation')}
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          style={style.menuItem}
          onClick={() =>
            language.language === 'en'
              ? language.setLanguage('es')
              : language.setLanguage('en')
          }
        >
          <span>{language.language}</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
