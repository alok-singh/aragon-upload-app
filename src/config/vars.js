export const MIN_PHOTO_REQUIRED = 6;
export const MAX_SIZE_MB = 12;
export const MIN_SIZE_MB = 0.1;
export const MAX_FILES = 10;

export const ACCEPTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/heic",
  "image/webp",
];

export const MIN_PHOTO_WIDTH = 500;
export const MIN_PHOTO_HEIGHT = 800;

export const BACKEND_URLS = {
  IMAGES: 'http://localhost:3001/api/images',
  UPLOAD_URL: 'http://localhost:3001/api/images',
  GET_IMAGE_URL: 'http://localhost:3001/uploads',
};
export const HTTP_METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

export const SAMPLE_EXPECTED_PHOTOS = [
  {
    id: "sample-1",
    url: "/static-samples/selfie.webp",
    text: "Upload frontal selfies that are well-lit and taken at eye-level",
  },
  {
    id: "sample-2",
    url: "/static-samples/variety.webp",
    text: "Upload photos in different outfits and backgrounds.",
  },
  {
    id: "sample-3",
    url: "/static-samples/recency.webp",
    text: "Upload recent photos from the last 6 months that feature similar hairstyles and lengths.",
  },
  {
    id: "sample-4",
    url: "/static-samples/clarity.webp",
    text: "Upload photos taken from a good distance, ideally taken from the chest or waist up.",
  },
];

export const SAMPLE_RESTRICTED_PHOTOS = [
  {
    id: "sample-5",
    url: "/static-samples/low_quality.webp",
    text: "Don’t upload photos that are, blurry, too dark / bright, or AI-generated",
  },
  {
    id: "sample-6",
    url: "/static-samples/revealing.webp",
    text: "Don't upload photos with low necklines, or in skimpy outfits",
  },
  {
    id: "sample-7",
    url: "/static-samples/no_accessories.webp",
    text: "Avoid photos of you with hats, sunglasses, headphones, lanyards, etc.",
  },
  {
    id: "sample-8",
    url: "/static-samples/taken_from_angle.webp",
    text: "Avoid photos taken from the side, or where you're looking away",
  },
];
