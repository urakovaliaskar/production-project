import { classNames } from 'shared/lib/classNames/classsNames';
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';

interface IPageErrorProps {
  className?: string
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('page_error')}</p>
      <Button onClick={reloadPage }>
        {t('page_refresh')}
      </Button>
    </div>
  )
}; 