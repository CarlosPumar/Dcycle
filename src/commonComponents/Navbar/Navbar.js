import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../../context/LangContext';
import style from './style';

const Navbar = () => {
  const language = useContext(langContext);

  return (
    <div style={style.menu}>
      <Link to="/name" style={style.menuItem} id="name">
        {language.t('Name')}
      </Link>
      <Link to="/covid/generalInformation" style={style.menuItem}>
        {language.t('GeneralInformation')}
      </Link>
      <Link to="/covid/oneDayInformation" style={style.menuItem}>
        {language.t('OneDayInformation')}
      </Link>
      <button
        style={style.languageItem}
        type="button"
        onClick={() =>
          language.language === 'en'
            ? language.setLanguage('es')
            : language.setLanguage('en')
        }
      >
        <span>{language.language}</span>
      </button>
    </div>
  );
};

export default Navbar;
