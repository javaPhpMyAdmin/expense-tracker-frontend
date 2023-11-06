import React from 'react';

export function useWindowsSize() {
  const [size, setSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
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
