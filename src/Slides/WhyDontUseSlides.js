import React from 'react';
import Note from '../Components/Notes/note';
import Slide from '../Components/RevealComponents/Slide';

const WhyDontUseSlides = () => (
  <Slide>
    <Slide transition="slide">
      <h3>Okay, but what's the catch?</h3>
      <Note>
        Ok, sounds good but what's the catch? There's downsides to every
        framework
      </Note>
    </Slide>
    <Slide transition="slide">
      <img src="https://i.redd.it/tfugj4n3l6ez.png" alt="" width="90%" />
      <Note>
        <p>
          If you're using node it's a pretty common joke that node_modules can
          grow astranomical, so you can end up with a lot of storage taken up.
          (Node modules was 400mb at the time of editing) However, if you've
          used something like Keynote, you know that also takes up a lot of
          storage. At least with Reveal you can use git.
        </p>
      </Note>
    </Slide>
    <Slide transition="slide">
      <h4>
        Potential rabbit hole with repo setup, code quality tools, deployment
        etc
      </h4>
      <Note>
        <p>
          You might add linting.. then a cicd pipeline.. then tests? (how far is
          too far?)
        </p>
      </Note>
    </Slide>
    <Slide transition="slide">
      <h2>😱</h2>
      <img
        src="image/vulns.png"
        alt="Screenshot of console showing 139 vulnerabilities"
      />
      <Note>
        <p>Packages need to be kept up to date</p>
      </Note>
    </Slide>
    <Slide transition="slide">
      <iframe
        src="https://giphy.com/embed/l378c85KbzBnSDWW4"
        width="400"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="tired"
      />
      <h4>Sometimes you just don't feel like writing code 🤷‍♀️</h4>
    </Slide>
  </Slide>
);

export default WhyDontUseSlides;
