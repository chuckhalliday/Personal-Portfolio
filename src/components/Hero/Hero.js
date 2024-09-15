import React from 'react';
import { Section, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to my web portfolio!
      </SectionTitle>
      <SectionText>
        I'm a focused and enthusiatic programmer, continuously educating myself on the latest tech trends at both high and low levels. Take a look at some of my deployed applications below and please feel free to link with me on Github!
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;