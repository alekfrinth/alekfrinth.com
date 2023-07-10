import cn from 'classnames';

import styles from './index.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({
  className,
  color = 'primary',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, styles[`button--${color}`])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
