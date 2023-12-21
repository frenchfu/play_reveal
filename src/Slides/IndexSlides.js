import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';



const IndexSlides = () => (
  <>    
    <Slide transition="concave">
        <h2 className="h2-list">• 本年度貢獻度</h2>
        <h2 className="h2-list">• 自我成長</h2>
        <h2 className="h2-list">• 未來發展規劃</h2>
        <h2 className="h2-list">• 對部群建議與期許</h2>
        <Note>
        <ul>
          <li>2</li>
          <li>稍微看看主題有什麼好閒聊的</li>
        </ul>
      </Note>
    </Slide>
  </>
);

export default IndexSlides;
