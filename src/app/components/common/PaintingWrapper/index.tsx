import { useTranslation } from '@/app/i18n';
import cn from 'classnames';
import Image, { ImageProps } from 'next/image';

import styles from './index.module.scss';

interface IPaintingWrapperProps extends ImageProps {
  isSold?: boolean;
  lng: string;
  href: string;
}

const PaintingWrapper = async ({
  isSold = undefined,
  lng,
  href,
  ...props
}: IPaintingWrapperProps) => {
  const { t } = await useTranslation(lng, 'common');

  const className = isSold
    ? styles.sold
    : isSold === false
    ? styles.buy
    : styles.disabled;

  return (
    <a
      className={cn(styles.wrapper, className)}
      style={{ width: props.width, height: props.height }}
      href={href}
    >
      <Image {...props} alt={props.alt} />
      <span className={styles.status}>{t(isSold ? 'sold' : 'buy')}</span>
    </a>
  );
};

export default PaintingWrapper;
