import React from 'react';

const BackgroundAnimation = () => {
  const getRandomOffset = () => Math.random() * 20 - 10;
  const getRandomColor = () => {
    const baseColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    const fluctuationAmount = 30;
    const fluctuatedColor = baseColor.map(component => {
      const fluctuation = (Math.random() * fluctuationAmount * 2) - fluctuationAmount;
      return Math.min(255, Math.max(0, component + fluctuation));
    });
    return `rgb(${fluctuatedColor.join(',')})`;
  };

  const getPathData = (startY) => {
    let pathData = `M0 ${startY}`;
    for (let i = 1; i < 17; i++) {
      const x = i * 40;
      const controlPointY = startY + getRandomOffset();
      const endPointY = startY + (i % 2 === 0 ? 100 : -100) + getRandomOffset();
      pathData += ` Q${x - 40} ${controlPointY}, ${x} ${endPointY}`;
    }
    pathData += ' Q800 300, 800 300';
    return pathData;
  };

  return (
    <div>
      <svg
        className="WaveformAnimation__svg"
        viewBox="0 -150 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[300, 375, 450, 525].map((startY, index) => {
          const burstColor = getRandomColor();
          const animationDuration = Math.floor(Math.random() * 8) + 3;
          const animationDelay = `${index * 1.5}s`;

          return (
            <g key={index} >
              <path
                id={`path-${index}`}
                d={getPathData(startY)}
                stroke="white"
                opacity="0.15"
                strokeWidth="2"
                fill="none"
              />
              <ellipse rx="20" ry="2" fill={burstColor}>
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin={animationDelay}
                >
                  <mpath href={`#path-${index}`} />
                </animateMotion>
              </ellipse>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
export default BackgroundAnimation;