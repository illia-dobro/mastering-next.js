'use client';

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import React, { useState } from 'react';

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="image" />
      )}
      {publicId}
      <CldUploadWidget
        uploadPreset="bpfxeet4"
        onUpload={(result, widget) => {
          if (result.event !== 'success') {
            return null;
          } else {
            const info = result.info as CloudinaryResult;
            setPublicId(info.public_id);
          }
        }}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button className="btn btn-primary" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
