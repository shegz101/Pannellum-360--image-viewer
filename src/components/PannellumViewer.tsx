import React, { useEffect } from 'react';

const PannellumViewer: React.FC = () => {
  useEffect(() => {
    // Initialize Pannellum Viewer
    pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: 'https://images.unsplash.com/photo-1557971370-e7298ee473fb', // Replace with the URL or path to your 360° image
      autoLoad: true,
      autoRotate: -6, // Optional: automatically rotate the image
      showControls: false
    });
  }, []);

  return <div id="panorama" style={{ width: '100%', height: '85vh', alignItems:"center", overflowX:'hidden' }}></div>;
};

export default PannellumViewer;
