import React from "react";

const NoLowQualityIcon = ({ className }) => (
  <svg
    className={className}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <circle
      cx="18"
      cy="18"
      r="16"
      fill="#fff"
      stroke="#F44336"
      strokeWidth="2"
    />
    <path
      d="M12 24l12-12M24 24L12 12"
      stroke="#F44336"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="13"
      y="13"
      width="10"
      height="10"
      rx="2"
      fill="#F9B233"
      opacity="0.5"
    />
  </svg>
);

export default NoLowQualityIcon;
