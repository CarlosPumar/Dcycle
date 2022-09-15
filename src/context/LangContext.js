import {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const langContext = createContext();
const defaultLanguage = 'en';

const LangProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const [local, setLocal] = useState(defaultLanguage);

  useEffect(() => {
    const currentLanguage = localStorage.getItem('language');
    if (!currentLanguage) {
      localStorage.setItem('language', defaultLanguage);
    }
    setLocal(currentLanguage || defaultLanguage);
    i18n.changeLanguage(currentLanguage || defaultLanguage);
  }, [i18n]);

  const setLanguage = useCallback(
    (language) => {
      localStorage.setItem('language', language);
      i18n.changeLanguage(language);
      setLocal(language);
    },
    [i18n],
  );

  const providerData = useMemo(
    () => ({ setLanguage, language: local, t }),
    [setLanguage, local, t],
  );

  return (
    <langContext.Provider value={providerData}>{children}</langContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { LangProvider, langContext };
