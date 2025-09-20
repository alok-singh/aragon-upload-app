import React, { useRef, useState } from "react";
import "./DragDropArea.css";
import { MAX_FILES } from "../config/vars";

const DragDropArea = ({ onFilesDropped, disabled, currentCount }) => {
  const [dragActive, setDragActive] = useState(false);
  const dropRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (disabled) return;
    const files = Array.from(e.dataTransfer.files);
    if (currentCount + files.length > MAX_FILES) {
      alert(`You can upload a maximum of ${MAX_FILES} images.`);
      return;
    }
    onFilesDropped(files);
  };

  return (
    <div
      ref={dropRef}
      className={`drag-drop-area${dragActive ? " drag-drop-area--active" : ""}${
        disabled ? " drag-drop-area--disabled" : ""
      }`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      tabIndex={0}
      aria-disabled={disabled}
    >
      Drag & drop files here
    </div>
  );
};

export default DragDropArea;
