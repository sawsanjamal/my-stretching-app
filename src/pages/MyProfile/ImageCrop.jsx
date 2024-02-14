import React, { createRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";

export const ImageCrop = () => {
  const file2Base64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

  const fileRef = createRef();
  const [uploaded, setUploaded] = useState(null);

  const onFileInputChange = (e) => {
    const file = e.target?.files?.[0];
    if (file) {
      console.log(file);
      file2Base64(file).then((base64) => {
        setUploaded(base64);
      });
    }
  };
  const cropperRef = createRef();
  const [cropped, setCropped] = useState(null);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCropped(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      {uploaded ? (
        <div className="pic-container">
          <Cropper
            src={cropped || uploaded}
            style={{ height: 200, width: 200 }}
            autoCropArea={1}
            aspectRatio={1}
            viewMode={3}
            guides={false}
            ref={cropperRef}
            className="cropper-view-box"
          />
          <div className="change-container">
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              onChange={onFileInputChange}
              accept="image/png,image/jpeg,image/gif"
            />
            <button
              className="change-btn"
              onClick={() => fileRef.current?.click()}
            >
              Change Image
            </button>
          </div>
          <button className="crop-btn" onClick={onCrop}>
            Crop
          </button>
        </div>
      ) : (
        <>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileRef}
            onChange={onFileInputChange}
            accept="image/png,image/jpeg,image/gif"
          />
          <button onClick={() => fileRef.current?.click()}>
            Upload something!
          </button>
        </>
      )}
    </>
  );
};