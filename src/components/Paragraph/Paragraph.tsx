import React from 'react';

import './assets/styles.css';
import cn from 'classnames';

interface ParagraphProps {
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
}
export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <div className={cn("Paragraph", className)}>{children}</div>
  )
}
