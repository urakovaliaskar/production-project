import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classsNames';
import { Navbar } from 'widgets/Navbar';
import AppRouter from './providers/router/ui/AppRouter';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;