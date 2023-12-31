import Image from 'next/image';

import PlaySVG from '@/app/assets/icons/play_button.svg';
import VideoBackground from '@/app/assets/images/video_button.png';

type Props = {
  className?: string;
};

const YoutubeVideo = ({ className }: Props) => {
  return (
    <a
      href="https://www.youtube.com/watch?v=qN_BnqEvLK0"
      target="_blank"
      className={className}
    >
      <Image
        src={VideoBackground}
        alt="Youtube Video"
        width={750}
        height={422}
        loading="eager"
      />
      <PlaySVG />
    </a>
  );
};

export default YoutubeVideo;
