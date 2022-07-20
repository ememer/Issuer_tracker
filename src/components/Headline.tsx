import React from "react";

import clsx from "clsx";

import "../sass/components/headline.scss";
type Props = {
  level: number;
  title: string;
  className: string;
  headlineBG: boolean;
};

const Headline = ({ title, level, className, headlineBG }: Props) => {
  return React.createElement(
    `h${level}`,
    {
      style: {
        padding: clsx({
          "2rem": level === 1,
          "1.8rem": level === 2,
          "1.6rem": level === 3,
          "1.4rem": level === 4,
        }),
      },
      className: clsx(
        className,
        "headline",
        {
          "level-1": level === 1,
          "level-2": level === 2,
          "level-3": level === 3,
          "level-4": level === 4,
        },
        headlineBG && "headline-bg"
      ),
    },
    title
  );
};

export default Headline;
