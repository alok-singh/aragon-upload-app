export const getFileHash = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
};

export const getImageDimensions = (file) => {
  return new Promise((resolve) => {
    if (!file || !file.type.startsWith("image/")) {
      resolve({});
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const dimensions = {
        width: img.naturalWidth,
        height: img.naturalHeight,
      };
      URL.revokeObjectURL(img.src); // cleanup
      resolve(dimensions);
    };

    img.onerror = () => {
      resolve({});
    };
  });
};

