import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classsNames';
import cls from './NotFoundPage.module.scss';

export interface INotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: INotFoundPageProps) =>  {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('not_found')}
    </div>
  );
}
