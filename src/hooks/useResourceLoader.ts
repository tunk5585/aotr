import { useState, useEffect } from 'react';

interface UseResourceLoaderResult {
  isLoading: boolean;
  progress: number;
  loadedCount: number;
  totalCount: number;
  error: string | null;
}

export const useResourceLoader = (resourceUrls: string[]): UseResourceLoaderResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (resourceUrls.length === 0) {
      setIsLoading(false);
      setProgress(100);
      return;
    }

    let loadedCounter = 0;
    const totalResources = resourceUrls.length;

    const loadResource = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        const handleLoad = () => {
          loadedCounter++;
          setLoadedCount(loadedCounter);
          setProgress((loadedCounter / totalResources) * 100);
          resolve();
        };

        const handleError = () => {
          console.warn(`Failed to load resource: ${url}`);
          loadedCounter++;
          setLoadedCount(loadedCounter);
          setProgress((loadedCounter / totalResources) * 100);
          resolve(); // Продолжаем даже при ошибке
        };

        img.onload = handleLoad;
        img.onerror = handleError;
        img.src = url;
      });
    };

    const loadAllResources = async () => {
      try {
        await Promise.all(resourceUrls.map(loadResource));
        setIsLoading(false);
      } catch (err) {
        setError('Ошибка при загрузке ресурсов');
        setIsLoading(false);
      }
    };

    loadAllResources();
  }, [resourceUrls]);

  return {
    isLoading,
    progress,
    loadedCount,
    totalCount: resourceUrls.length,
    error
  };
}; 