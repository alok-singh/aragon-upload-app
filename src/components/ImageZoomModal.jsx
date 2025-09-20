import React from "react";
import "./ImageZoomModal.css";

const ImageZoomModal = ({ src, alt, onClose }) => (
  <div className="zoom-modal" onClick={onClose}>
    <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={src} alt={alt} />
      <button className="zoom-modal-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
    </div>
  </div>
);

export default ImageZoomModal;
