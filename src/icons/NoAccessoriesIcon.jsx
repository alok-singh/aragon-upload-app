import React from "react";

const NoAccessoriesIcon = ({ className }) => (
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
    <circle cx="18" cy="18" r="5" fill="#F9B233" opacity="0.5" />
    <rect x="15" y="15" width="6" height="6" rx="3" fill="#fff" opacity="0.7" />
  </svg>
);

export default NoAccessoriesIcon;
