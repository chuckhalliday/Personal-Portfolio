import React, { useState, useRef } from 'react';
import { Theme, Container, VideoStyled } from '../styles/theme';

export default function App({ Component, pageProps }) {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleVideoPlay = () => {
    // Play both video and audio together
    videoRef.current.play();
  };

  const handleVideoPause = () => {
    // Pause both video and audio together
    videoRef.current.pause();
  };

  return (
    <>
      {!videoEnded ? (
        <Container>
          <VideoStyled
            ref={videoRef}
            onEnded={handleVideoEnd}
            onClick={handleVideoPlay}
            onPause={handleVideoPause}
            autoPlay
            muted={false}
          >
            <source src="../videos/AOL (Sign On - Dial Up).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoStyled>
          
        </Container>
      ) : (
        <Theme>
          <Component {...pageProps} />
        </Theme>
      )}
    </>
  );
}