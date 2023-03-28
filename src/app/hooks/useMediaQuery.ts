import { EScreenSizes } from 'app/constants/screens';
import { useMediaQuery } from 'react-responsive';

export const useScreenSize = () => {
  const isUltraHD = useMediaQuery({ minWidth: 3000 });
  const isFullHD = useMediaQuery({ maxWidth: 2999, minWidth: 1750 });
  const isHD = useMediaQuery({ maxWidth: 1749 });

  const getScreenSize = () => {
    switch (true) {
      case isUltraHD:
        return EScreenSizes.ULTRA_HD;

      case isFullHD:
        return EScreenSizes.FULL_HD;

      case isHD:
        return EScreenSizes.HD;

      default:
        return EScreenSizes.HD;
    }
  };

  return {
    screenSize: getScreenSize(),
  };
};
