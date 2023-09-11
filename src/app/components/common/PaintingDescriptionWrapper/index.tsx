import cn from 'classnames';

import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
  noBorders?: boolean;
  height?: number;
};

const PaintingDescriptionWrapper = ({
  className,
  children,
  position = 'right',
  noBorders = false,
  height,
}: Props) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles['wrapper--left']]: position === 'left',
        [styles['wrapper--no-borders']]: noBorders,
      })}
      style={{ height: height ? `${height + 16}px` : '' }}
    >
      {children}
    </div>
  );
};

export default PaintingDescriptionWrapper;
