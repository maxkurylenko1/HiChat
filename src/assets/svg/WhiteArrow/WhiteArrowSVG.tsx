import * as React from 'react';
import { SVGProps } from 'react';

const WhiteArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="m268 112 144 144-144 144m124-144H100"
    />
  </svg>
);

export default WhiteArrowSVG;
