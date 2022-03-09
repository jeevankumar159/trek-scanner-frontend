import { useState, useRef, useEffect } from 'react';
import classes from './Slideshow.module.css';

const delay = 2500;

const Slideshow = (props) => {
  const images = props.images;

  const SlideImages = images.map((imgUrl) => {
    return <img className={classes.img} src={imgUrl} alt='' width='300' height='360'></img>;
  });

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const increaseIndex = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  });

  return (
    <div className={classes.slideshow}>
      <div className={classes.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {SlideImages}
      </div>

      <div className={classes.slideshowDots}>
        <div className={classes['slideshowDot']} onClick={decreaseIndex}></div>
        <div className={classes['slideshowDot']} onClick={increaseIndex}></div>
      </div>
    </div>
  );
};

export default Slideshow;
