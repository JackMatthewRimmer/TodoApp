import { type FC } from "react";

interface CrossSvgProps {}

export const CrossSvg: FC<CrossSvgProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#f00f0f"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      transform="rotate(-45)"
      stroke="#f00f0f"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Zm5-9a1,1,0,0,1-1,1H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3A1,1,0,0,1,17,12Z" />
      </g>
    </svg>
  );
};
