import React from "react";

const UploadIcon = ({ className, colour }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 15V5M10 5l-4 4M10 5l4 4"
      stroke={colour ? colour : "#222"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="3" y="15" width="14" height="2" rx="1" fill={colour ? colour : "#222"} />
  </svg>
);

export default UploadIcon;
