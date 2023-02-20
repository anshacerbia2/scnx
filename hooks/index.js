import { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const useParentSize = (parentRef) => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    setSize([parentRef.current?.clientWidth, parentRef.current?.clientHeight]);
  }, [parentRef.current?.clientWidth])
  return size;
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const useTimeout = (callback, delay) => {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the timeout.
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export { useWindowSize, useParentSize, useInterval, useTimeout };