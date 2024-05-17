// useIntersectionObserver.js
import { useEffect } from "react";

const useIntersectionObserver = (ref, callback, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, callback, options]);
};

export default useIntersectionObserver;
