import React from 'react';
import { useEffect } from 'react';

export function useWindowsSize() {
  const [size, setSize] = React.useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
}
