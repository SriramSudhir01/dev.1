import imageCompression from 'browser-image-compression';

export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');
    return contentType?.startsWith('image/') || false;
  } catch (error) {
    return false;
  }
}

export async function compressImage(file: File, maxSizeMB: number = 1): Promise<File> {
  const options = {
    maxSizeMB,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    preserveExif: true,
    onProgress: (progress: number) => console.log('Compression progress:', progress)
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error('Error compressing image:', error);
    return file;
  }
}

export function cleanupObjectUrl(url: string | null) {
  if (url?.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}

export async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

export function generateFileName(originalName: string, prefix: string = 'processed'): string {
  const extension = originalName.split('.').pop()?.toLowerCase() || 'png';
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(7);
  return `${prefix}-${timestamp}-${randomString}.${extension}`;
}