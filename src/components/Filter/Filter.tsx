import React, { useState, useCallback } from "react";

import "./assets/styles.css";
import cn from "classnames";

interface FilterProps {
  years: number[];
  className?: string;
}
export const Filter: React.FC<FilterProps> = ({ years, className }) => {
  const [currentYear, setCurrentYear] = useState(0);
  const onYearClick = useCallback(
    (year: number) => () => {
      setCurrentYear(year);
    },
    []
  );
  return (
    <div className={cn("Filter", className)}>
      {years.map(year => (
        <div
          key={year}
          onClick={onYearClick(year)}
          className={cn("FilterItem", {
            FilterItem_current: year === currentYear
          })}
        >
          {year}
        </div>
      ))}
    </div>
  );
};
