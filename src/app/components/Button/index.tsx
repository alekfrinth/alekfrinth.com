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
    <div className={cn(styles.wrapper, className)}>
      <button
        className={cn(styles.button, styles[`button--${color}`])}
        {...props}
      >
        {children}
      </button>
      <span className={styles.shadow} />
    </div>
  );
};

export default Button;
