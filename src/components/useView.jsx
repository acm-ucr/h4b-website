import { useRef, useState, useEffect } from "react";

const useView = () => {
  const [inView, setInView] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) {
        setInView(false);
        return;
      }
      setInView(
        ref.current.getBoundingClientRect().top <= window.innerHeight &&
          ref.current.getBoundingClientRect().bottom >= 0
      );
    };
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  }, []);
  return [inView, ref];
};

export default useView;
