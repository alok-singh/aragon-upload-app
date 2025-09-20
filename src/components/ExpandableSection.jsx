import React, { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
import "./ExpandableSection.css";

const ExpandableSection = ({ title, icon: Icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="expandable-section">
      <button className="expandable-header" onClick={() => setOpen((o) => !o)}>
        <span className="expandable-icon">
          <Icon />
        </span>
        <span className="expandable-title">{title}</span>
        <span className={`expandable-chevron${open ? " open" : ""}`}>
          <ChevronIcon />
        </span>
      </button>
      {open && <div className="expandable-content">{children}</div>}
    </div>
  );
};

export default ExpandableSection;
