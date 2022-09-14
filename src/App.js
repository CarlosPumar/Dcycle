import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'antd/dist/antd.min.css';

const App = () => {
  return (
    <Router basename="/">
      <AppRouter />
    </Router>
  );
};

export default App;
