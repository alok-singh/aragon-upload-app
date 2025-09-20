import React from "react";

const VarietyIcon = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <rect x="4" y="4" width="8" height="8" rx="2" fill="#F9B233" />
    <rect
      x="16"
      y="4"
      width="8"
      height="8"
      rx="2"
      fill="#F9B233"
      opacity="0.7"
    />
    <rect
      x="4"
      y="16"
      width="8"
      height="8"
      rx="2"
      fill="#F9B233"
      opacity="0.5"
    />
    <rect
      x="16"
      y="16"
      width="8"
      height="8"
      rx="2"
      fill="#F9B233"
      opacity="0.3"
    />
  </svg>
);

export default VarietyIcon;
