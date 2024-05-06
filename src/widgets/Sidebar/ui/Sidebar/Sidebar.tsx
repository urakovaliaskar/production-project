import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classsNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, SetCollapsed] = useState(false);

  const onToggle = () => SetCollapsed(prev => !prev);

  return (
    <div 
      className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};