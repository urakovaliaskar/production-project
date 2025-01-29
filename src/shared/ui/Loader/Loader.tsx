import { classNames } from 'shared/lib/classNames/classsNames';
import './Loader.scss'; 

interface ILoaderProps {
  className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
  )
};