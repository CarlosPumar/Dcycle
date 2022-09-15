import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'antd/dist/antd.min.css';
import { LangProvider } from './context/LangContext';

const App = () => {
  return (
    <LangProvider>
      <Router basename="/">
        <AppRouter />
      </Router>
    </LangProvider>
  );
};

export default App;
