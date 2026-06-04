import * as React from "react";
const SVGLogo = (props: React.JSX.IntrinsicElements["svg"]) => (
  <svg width={150} height={80} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Layer 1"}</title>
    <g fill="#fff" strokeWidth={0}>
      <path d="m122.057 51.665-.018-14.7 5.103 4.846.018 14.7-15.477-.017-5.102-4.846z" />
      <path d="m127.732 51.665 15.477-.017-5.102 4.846-15.477.017.018-14.7 5.102-4.846z" />
      <path d="m97.515 56.52-90.873.017L36.6 51.69l90.873-.017-.106 14.7-29.958 4.845z" />
      <path d="m127.881 56.899.018 14.7-5.102-4.847-.018-14.7 15.477.018 5.102 4.846z" />
      <g fontSize={24} fontFamily="'Inter'" fontWeight="bold" stroke="#fff">
        <text
          x={27.333}
          y={33.6}
          xmlSpace="preserve"
          transform="matrix(1.53868 0 0 1.7735 -25.638 -6.905)"
        >
          {"M"}
        </text>
        <text
          x={45.673}
          y={45.5}
          xmlSpace="preserve"
          transform="matrix(1.61034 0 0 1.79241 -33.835 -28.643)"
        >
          {"E"}
        </text>
        <text
          x={65.031}
          y={53.9}
          xmlSpace="preserve"
          transform="matrix(1.96853 0 0 1.79096 -72.124 -43.666)"
        >
          {"T"}
        </text>
        <text
          x={74.629}
          y={48.65}
          xmlSpace="preserve"
          transform="matrix(1.65028 0 0 1.80196 -43.88 -34.532)"
        >
          {"E"}
        </text>
        <text
          x={93}
          y={52.28}
          xmlSpace="preserve"
          transform="matrix(1.75742 0 0 1.80432 -67.056 -41.204)"
        >
          {"R"}
        </text>
      </g>
    </g>
  </svg>
);
export default SVGLogo;
