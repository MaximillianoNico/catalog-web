"use client"
import { useEffect, useState } from "react";

const useAction = () => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setLoading(false);
  }, [])

  const onWindowChange = () => {
    setWidth(window.innerWidth);
    setLoading(false);
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowChange);

    return () => {
      window.removeEventListener('resize', onWindowChange);
    }
  }, []);

  const isMobile = width <= 768;

  return {
    isMobile: isMobile && !loading
  }
}

export default useAction;
