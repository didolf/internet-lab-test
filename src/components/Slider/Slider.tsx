import React, { useRef, useEffect, useState, useCallback } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";

import "./assets/styles.css";
import cn from "classnames";

interface SliderProps {
  className?: string;
  tabs: React.ReactChild[];
}

export const Slider: React.FC<SliderProps> = ({ className, tabs }) => {
  const root = useRef<HTMLDivElement | null>(null);
  const [tabSize, setTabSize] = useState(0);
  useEffect(() => {
    if (root.current) {
      const { width } = root.current.getBoundingClientRect();
      setTabSize(width);
    }
    function handleResize() {
      if (root.current) {
        const { width } = root.current.getBoundingClientRect();
        setTabSize(width);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [root.current]);
  const [current, setCurrent] = useState(1);
  const onLeftArrowClick = useCallback(() => {
    setCurrent(prev => {
      return 1 < prev ? prev - 1 : prev;
    });
  }, []);

  const onRightArrowClick = useCallback(() => {
    setCurrent(prev => {
      return prev + 1 <= tabs.length ? prev + 1 : prev;
    });
  }, [tabs.length]);
  return (
    <div className={cn("Slider", className)} ref={root}>
      <div className="Slider-Content">
        <div
          className="Slider-ContentWrap"
          style={{
            width: tabSize * tabs.length,
            transform: `translate(-${(current - 1) * tabSize}px)`
          }}
        >
          {tabs.map((tab, idx) => (
            <div
              style={{ width: tabSize }}
              className="Slider-ContentItem"
              key={idx}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="Slider-Control">
        <LeftArrowIcon
          onClick={onLeftArrowClick}
          className="Slider-LeftControl"
        />
        <div className="Slider-ControlText">
          {current} из {tabs.length}
        </div>
        <RightArrowIcon
          onClick={onRightArrowClick}
          className="Slider-LeftControl"
        />
      </div>
    </div>
  );
};
