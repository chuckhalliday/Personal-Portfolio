import React from 'react';
import { Section, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Great, You Made It!
      </SectionTitle>
      <SectionText>
        Please take a look around and feel free to reach out via email or socials, I'm always on the lookout for new projects and challenges.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;