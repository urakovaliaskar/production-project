import { classNames } from 'shared/lib/classNames/classsNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('page_error')}</p>
      <Button onClick={reloadPage}>
        {t('page_refresh')}
      </Button>
    </div>
  );
};
