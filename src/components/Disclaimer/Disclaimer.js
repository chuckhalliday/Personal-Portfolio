import React from 'react';
import { Section, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './DisclaimerStyles';
import { ZoomImage } from './DisclaimerStyles';



const Disclaimer = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Important Disclaimer:
      </SectionTitle>
      <SectionText>
        I know senior.. elected.. government officials, who I can force my political bias and.. influence, on fellow.... politicians.. <br /> To vote MY way. For a payoff, of course..
      </SectionText>
      <Button onClick={() => window.open("https://isntthatcorrupt.com")}>
      <ZoomImage src='../images/Breen.png' alt="Button Image"/> 
      </Button>
    </LeftSection>
  </Section>
);

export default Disclaimer;