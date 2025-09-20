import React from "react";

const SelfieIcon = ({ className }) => (
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
      r="13"
      stroke="#F9B233"
      strokeWidth="2"
      fill="#fff"
    />
    <circle cx="14" cy="13" r="5" fill="#F9B233" />
    <rect x="9" y="19" width="10" height="3" rx="1.5" fill="#F9B233" />
  </svg>
);

export default SelfieIcon;
