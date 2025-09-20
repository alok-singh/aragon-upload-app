import React, { useRef } from "react";
import DragDropArea from "./DragDropArea";
import UploadIcon from "../icons/UploadIcon";
import "./UploadSection.css";
import {
  ACCEPTED_TYPES,
  MAX_FILES,
  MAX_SIZE_MB,
  MIN_SIZE_MB,
} from "../config/vars";

const UploadSection = ({ onFilesAdded, disabled, currentCount }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
    e.target.value = "";
  };

  const handleFiles = (files) => {
    const validFiles = files.filter((file) => {
      return (
        ACCEPTED_TYPES.includes(file.type) &&
        file.size <= MAX_SIZE_MB * 1024 * 1024 &&
        file.size >= MIN_SIZE_MB * 1024 * 1024
      );
    });
    if (currentCount + validFiles.length > MAX_FILES) {
      alert(`You can upload a maximum of ${MAX_FILES} images.`);
      return;
    }
    if (validFiles.length !== files.length) {
      alert("Some files were not accepted (wrong type, too large, too small).");
    }
    if (validFiles.length) {
      onFilesAdded(validFiles);
    }
  };

  return (
    <section className="upload-section">
      <h2>Upload photos</h2>
      <div className="upload-section-desc">
        <div className="text-base text-neutral-700">
          Now the fun begins! Select at least{" "}
          <span className="font-bold">6 of your best photos.</span> Uploading{" "}
          <b>a mix of close-ups, selfies and mid-range shots</b> can help the AI
          better capture your face and body type.
        </div>
      </div>
      <div className="upload-section-actions">
        <button
          className="upload-section-button"
          onClick={() => fileInputRef.current.click()}
          disabled={disabled}
        >
          <UploadIcon colour="#fff" />
          Upload files
        </button>
        <input
          type="file"
          accept={ACCEPTED_TYPES.join(",")}
          multiple
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
          disabled={disabled}
        />
        <span className="upload-section-or">or</span>
        <DragDropArea
          onFilesDropped={handleFiles}
          disabled={disabled}
          currentCount={currentCount}
        />
      </div>
    </section>
  );
};

export default UploadSection;
