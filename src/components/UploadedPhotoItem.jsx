import React from "react";
import DeleteIcon from "../icons/DeleteIcon";
import "./UploadedPhotoItem.css";

const UploadedPhotoItem = ({
  src,
  alt,
  onDelete,
  onClick,
  text,
  samplePhoto,
}) => (
  <div className="uploaded-photo-item-wrapper">
    <div className="uploaded-photo-item">
      <img
        src={src}
        alt={alt}
        className="uploaded-photo-img"
        onClick={onClick}
        tabIndex={0}
        style={{ cursor: "zoom-in" }}
      />
      {samplePhoto ? null : (
        <button
          className="uploaded-photo-delete"
          onClick={onDelete}
          aria-label="Delete photo"
          tabIndex={0}
          type="button"
        >
          <DeleteIcon />
        </button>
      )}
    </div>
    <div className="photo-text">{text}</div>
  </div>
);

export default UploadedPhotoItem;
