import { RefObject, useEffect } from 'react';

export const useObserver = (targetRef: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) callback();
    });
    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef, callback]);
};
