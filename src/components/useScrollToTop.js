import { useEffect } from 'react';

export default function useScrollToTop(pathname) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
