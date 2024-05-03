import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classsNames';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;