import { Routes, Route, Navigate } from 'react-router-dom';
import Name from '../pagesComponents/NameInformationPage/NameInformationPage';
import Covid from '../pagesComponents/CovidLineInformationPage/CovidLineInformationPage';
import CovidOneDayInformation from '../pagesComponents/CovidOneDayInformationPage/CovidOneDayInformationPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/name" replace />} />
      <Route path="/name" element={<Name />} />
      <Route path="/covid/generalInformation" element={<Covid />} />
      <Route
        path="/covid/oneDayInformation"
        element={<CovidOneDayInformation />}
      />
      <Route path="*" element="404 Not found" />
    </Routes>
  );
};

export default AppRouter;
