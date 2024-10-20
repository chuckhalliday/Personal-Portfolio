import React, { useState, useRef } from 'react';
import { Theme, Container, Title, SubTitle, VideoStyled } from '../styles/theme';

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
          <Title onClick={handleVideoPlay}>Welcome to the World Wide Web!!! Click to login...</Title>
          <SubTitle onClick={handleVideoEnd}>(Or... Join me in the future down here...)</SubTitle>
        </Container>
      ) : (
        <Theme>
          <Component {...pageProps} />
        </Theme>
      )}
    </>
  );
}