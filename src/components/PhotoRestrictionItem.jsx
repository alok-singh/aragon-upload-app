import React from "react";

const PhotoRestrictionItem = ({ icon: Icon, title, description }) => (
  <div className="photo-restriction-item">
    <div className="photo-restriction-icon">
      <Icon />
    </div>
    <div>
      <div className="photo-restriction-title">{title}</div>
      <div className="photo-restriction-desc">{description}</div>
    </div>
  </div>
);

export default PhotoRestrictionItem;
