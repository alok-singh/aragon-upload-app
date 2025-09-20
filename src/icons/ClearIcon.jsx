import React from "react";

const ClearIcon = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <circle
      cx="14"
      cy="14"
      r="12"
      stroke="#F9B233"
      strokeWidth="2"
      fill="#fff"
    />
    <rect x="9" y="10" width="10" height="8" rx="2" fill="#F9B233" />
    <rect x="11" y="12" width="6" height="4" rx="1" fill="#fff" />
  </svg>
);

export default ClearIcon;
