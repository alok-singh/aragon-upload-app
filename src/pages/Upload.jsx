import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import UploadSection from "../components/UploadSection";
import UploadedPhotos from "../components/UploadedPhotos";

import {
  BACKEND_URLS,
  HTTP_METHODS,
  MAX_FILES,
  MIN_PHOTO_HEIGHT,
  MIN_PHOTO_WIDTH,
  SAMPLE_EXPECTED_PHOTOS,
  SAMPLE_RESTRICTED_PHOTOS,
} from "../config/vars";
import RestrictedIcon from "../icons/RestrictedIcon";
import SuccessIcon from "../icons/SuccessIcon";
import "./Upload.css";

import { getFileHash, getImageDimensions } from "../util/file-utils";
import { fetchResource, uploadFile } from "../util/http.util";

const Upload = () => {
  const [photos, setPhotos] = useState([]);
  const [rejectedPhotos, setRejectedPhotos] = useState([]);

  const handleFilesAdded = async (files) => {
    const responseList = await Promise.all(
      files.map((file) => {
        return uploadFile(BACKEND_URLS.UPLOAD_URL, HTTP_METHODS.POST, file);
      })
    );

    const imageDimensionList = await Promise.all(
      files.map((file) => {
        return getImageDimensions(file);
      })
    );

    const imageHashList = await Promise.all(
      files.map((file) => {
        return getFileHash(file);
      })
    );

    const newPhotos = files
      .map((file, index) => {
        return {
          id: responseList[index].id,
          url: `${BACKEND_URLS.GET_IMAGE_URL}/${responseList[index].filename}`,
          dimension: imageDimensionList[index],
          status: responseList[index].status,
        };
      })
      .filter(({ dimension }) => {
        return !(
          dimension.width < MIN_PHOTO_WIDTH ||
          dimension.height < MIN_PHOTO_HEIGHT
        );
      });

    const smallImages = newPhotos.filter(({ dimension }) => {
      return (
        dimension.width < MIN_PHOTO_WIDTH || dimension.height < MIN_PHOTO_HEIGHT
      );
    });

    setRejectedPhotos((prev) => [...prev, ...smallImages]);
    setPhotos((prev) => [...prev, ...newPhotos].slice(0, MAX_FILES));
  };

  useEffect(() => {
    const asyncMethod = async () => {
      const data = await fetchResource(BACKEND_URLS.IMAGES, HTTP_METHODS.GET);
      const parsedData = data.map((photo) => {
        return {
          id: photo.id,
          url: `${BACKEND_URLS.GET_IMAGE_URL}/${photo.filename}`,
          status: photo.status,
        };
      });
      const acceptedImages = parsedData.filter(
        (image) => image.status === "uploaded"
      );
      const rejectedImages = parsedData.filter(
        (image) => image.status === "rejected"
      );

      setPhotos(acceptedImages);
      setRejectedPhotos(rejectedImages);
    };
    asyncMethod();
  }, []);

  const handleDelete = async (id) => {
    await fetchResource(`${BACKEND_URLS.IMAGES}/${id}`, HTTP_METHODS.DELETE);
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  console.log(photos);

  return (
    <div className="upload-page-wrapper">
      <div className="left-section">
        <UploadSection
          onFilesAdded={handleFilesAdded}
          disabled={photos.length >= MAX_FILES}
          currentCount={photos.length}
        />
      </div>
      <div className="right-section">
        <div className="progress-bar-wrapper">
          <div className="photo-preview-section">
            <div>Uploaded Images</div>
            <div>
              <b>{photos.length}</b> of <b>{MAX_FILES}</b>
            </div>
          </div>
          <ProgressBar value={photos.length} max={MAX_FILES} />
        </div>
        <UploadedPhotos
          title="Uploaded photos"
          photos={photos}
          onDelete={handleDelete}
        />
        {rejectedPhotos.length ? (
          <UploadedPhotos
            title="Some Photos Didn't Meet Our Guidelines"
            photos={rejectedPhotos}
            onDelete={handleDelete}
          />
        ) : null}
        <UploadedPhotos
          title="Photo requirements"
          type="success"
          photos={SAMPLE_EXPECTED_PHOTOS}
          titleIcon={<SuccessIcon />}
          noPreviews={true}
        />
        <UploadedPhotos
          title="Photo Restrictions"
          type="error"
          photos={SAMPLE_RESTRICTED_PHOTOS}
          noPreviews={true}
          titleIcon={<RestrictedIcon />}
        />
      </div>
    </div>
  );
};

export default Upload;
