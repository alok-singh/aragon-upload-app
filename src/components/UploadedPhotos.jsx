import React, { useState } from "react";
import UploadedPhotoItem from "./UploadedPhotoItem";
import ImageZoomModal from "./ImageZoomModal";
import "./UploadedPhotos.css";
import ChevronIcon from "../icons/ChevronIcon";

const UploadedPhotos = ({ photos, titleIcon, onDelete, title, noPreviews, type }) => {
  const [zoomed, setZoomed] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className={`uploaded-photos-section ${type ? type : ""}`}>
      <div className="uploaded-photos-header">
        <h2>
          {titleIcon ? titleIcon : null} {title}
        </h2>
        <div
          className={`chevron-icon-wrapper ${isExpanded ? "expended" : ""}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronIcon />
        </div>
      </div>
      {isExpanded ? (
        <div className="uploaded-photos-grid">
          {photos.length ? (
            photos.map((photo, idx) => (
              <UploadedPhotoItem
                key={photo.id}
                src={photo.url}
                text={photo.text}
                alt={`Uploaded ${idx + 1}`}
                onDelete={() => onDelete(photo.id)}
                onClick={() => setZoomed(photo)}
                samplePhoto={noPreviews}
              />
            ))
          ) : (
            <div className="empty-photos-section">No photos</div>
          )}
        </div>
      ) : null}
      {!noPreviews && isExpanded && zoomed && (
        <ImageZoomModal
          src={zoomed.url}
          alt="Zoomed preview"
          onClose={() => setZoomed(null)}
        />
      )}
    </section>
  );
};

export default UploadedPhotos;
