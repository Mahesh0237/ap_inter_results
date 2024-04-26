import React, { useRef } from 'react'
import Approuter from './Approuter'

import html2canvas from 'html2canvas';
function App() {
  const screenshotRef = useRef(null);
  const captureScreenshot = () => {
    if (!screenshotRef.current) return;

    html2canvas(screenshotRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'screenshot.png';
      link.click();
    });
  };
  return (
    <div ref={screenshotRef} style={{ background: "#11192e" }}>
      <Approuter captureScreenshot={captureScreenshot} />
    </div>
  )
}

export default App