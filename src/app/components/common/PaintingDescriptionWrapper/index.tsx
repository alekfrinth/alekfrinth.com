import cn from 'classnames';

import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
};

const PaintingDescriptionWrapper = ({
  className,
  children,
  position = 'right',
}: Props) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles['wrapper--left']]: position === 'left',
      })}
    >
      {children}
    </div>
  );
};

export default PaintingDescriptionWrapper;
