import React, { useState } from 'react';
import { Theme, Container, VideoStyled } from '../styles/theme';

export default function App({ Component, pageProps }) {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };
  return (
    <>
      {!videoEnded ? (
        <Container>
        <VideoStyled onEnded={handleVideoEnd} autoPlay muted>
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
 