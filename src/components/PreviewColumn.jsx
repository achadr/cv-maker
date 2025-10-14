import React, { useEffect, useRef, useState } from 'react';

export const PreviewColumn = ({ children }) => {
  const containerRef = useRef(null);
  const previewRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current || !previewRef.current) return;

      const container = containerRef.current;
      const preview = previewRef.current;

      // Account for padding (16px = 4 * 4 on each side)
      const padding = 32; // 16px on each side

      const containerHeight = container.clientHeight - padding;
      const previewHeight = preview.scrollHeight;
      const containerWidth = container.clientWidth - padding;
      const previewWidth = preview.scrollWidth;

      // Calculate scale to fit both height and width
      const scaleByHeight = containerHeight / previewHeight;
      const scaleByWidth = containerWidth / previewWidth;

      // Use the smaller scale to ensure it fits in both dimensions
      // Add a small margin (0.95) to prevent edge cases
      const newScale = Math.min(scaleByHeight, scaleByWidth, 1) * 0.95;

      setScale(newScale);
    };

    // Use a small delay to ensure DOM is fully rendered
    const timer = setTimeout(calculateScale, 100);

    window.addEventListener('resize', calculateScale);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateScale);
    };
  }, [children]);

  return (
    <main ref={containerRef} className="flex justify-center items-start h-full overflow-hidden p-4">
      <div
        ref={previewRef}
        className="w-full origin-top"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          maxWidth: '100%'
        }}
      >
        {children}
      </div>
    </main>
  );
};
