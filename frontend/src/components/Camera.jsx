import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import "../styles/Camera.css";

const Camera = ({ setUseCamera, setPicture }) => {
  const cameraRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleTake = useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [cameraRef]);

  const handleRetake = () => {
    setImgSrc(null);
  };

  const handlePic = () => {
    setPicture(imgSrc);
    setUseCamera(false);
  };

  return (
    <div>
      {imgSrc ? (
        <div>
          <img src={imgSrc} alt="picture" />
          <button onClick={handleRetake}>Retake picture</button>
          <button onClick={handlePic}>Picture chosen!</button>
        </div>
      ) : (
        <div>
          <Webcam className="webcam" height={600} width={600} ref={cameraRef} />
          <button onClick={handleTake}>Take picture</button>
        </div>
      )}
    </div>
  );
};

export default Camera;
