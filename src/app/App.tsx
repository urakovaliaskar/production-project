import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classsNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import AppRouter from './providers/router/ui/AppRouter';

import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;