import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I know senior elected government officials who I can force my political.. bias and influence on fellow.. politicians, to vote my way..  For a payoff of course
      </SectionText>
      <Button onClick={() => window.location = "https://isntthatcorrupt.com"}><img src='../images/Breen.png' width='20%' height='75%'/></Button>
    </LeftSection>
  </Section>
);

export default Hero;