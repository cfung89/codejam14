import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

import { postReport } from "../server";

const Camera = () => {
  const cameraRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const takePic = useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setImgSrc(null);
  }, [cameraRef]);

  // console.log(imgSrc);
  // postReport(imgSrc);

  return (
    <div>
      {imgSrc ? (
        <img src={imgSrc} alt="picture" />
      ) : (
        <Webcam height={600} width={600} ref={cameraRef} />
      )}
      <div>
        <button onClick={takePic}>Take picture</button>
      </div>
    </div>
  );
};

export default Camera;
