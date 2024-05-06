import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classsNames';
import cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
      <Button 
        onClick={toggleLang} 
        className={classNames(cls.langSwitcher, {}, [className])}
      >
        {t('lang')}
      </Button>
  );
};