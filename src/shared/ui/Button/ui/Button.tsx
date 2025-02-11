import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classsNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY ='secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}

export const Button: FC<ButtonProps> = ({
  className, children, theme = ButtonTheme.CLEAR, ...attributes
}) => (
  <button
    type="button"
    className={classNames(cls.button, {}, [className, cls[theme]])}
    onClick={attributes.onClick}
    disabled={attributes.disabled}
  >
    {children}
  </button>
);
