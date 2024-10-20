import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work with a wide range of languages, frameworks and tools, with a primary motivating focus on web development, cybersecurity, and audio production plugins
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Javascript/Typescript, HTML/CSS, Python, SQL, Bash, C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            React/Redux, Vue, Node.js, Django, Bootstrap, Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git, Docker, Postman, Burp Suite, Storyboard, Jira, VS Code, AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>DAWs and DSP</ListTitle>
          <ListParagraph>
            Max for Live, Ableton, JUCE, Essentia
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
