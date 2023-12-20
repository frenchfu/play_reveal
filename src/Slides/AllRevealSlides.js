import React from 'react';
import styled from 'styled-components';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutRevealSlides = () => (
  <>
    <Slide>
      <Slide>
        <img
          src="image/reveal.png"
          alt="Screenshot of console showing 139 vulnerabilities"
        />
        <Note>
          <ul>
            <li>So what is reveal.js?</li>
            <li>Framework for creating presentations with HTML</li>
            <li>
              The slides you're seeing has been created with the framework
            </li>
            <li>
              These slides are made completely of code and a few extra things
              embedded like images, but all of the structure, text, colors have
              been defined in code
              <li>Open source</li>
            </li>
          </ul>
        </Note>
      </Slide>
    </Slide>
    <Slide>
      <Slide transition="slide">
        <h3>Features of Reveal</h3>
      </Slide>
      <Slide transition="slide">
        <ul>
        <li>
          非常灵活的 HTML 框架，因此可以与所有您喜欢的 Web 库一起使用（例如 React）。
        </li>
        <li>我的演示将使用 React，但这是可选的！</li>
        <li>在线提供无代码编辑器。</li>

        </ul>
        <Note>
          <ul>
            <li>So what are some of the features of reveal?</li>
            <li>
              For example, both in previous jobs and my current one, I use React
              so I'm very comfortable with it, therefore I can use them while I
              built these slides and it felt very intuitive.
            </li>
            <li>
              There is also the option to use this library with no code! So you
              can make use of all the great features without needing to code
              yourself
            </li>
          </ul>
        </Note>
      </Slide>
      <SlideWithTitle transition="slide" title="Has lots of plugins built in">
      <ul>
        <li>演讲者备注</li>
        <li>代码片段</li>
        <li>Markdown</li>
        <li>数学</li>
        <li>.. 並允許您構建自定義的</li>
      </ul>
      <Note>
        它內置了一堆插件，可以實現演示軟件的所有常見功能以及一些額外的功能。
      </Note>
      </SlideWithTitle>
      <Slide transition="slide">
      <h4>無障礙性</h4>
      <Note>
        <ul>
          <li>在這裡，我提到無障礙性有兩個方面：</li>
          <li>
            首先，如果您按照 Web 無障礙性標準構建您的投影片，那麼使用屏幕閱讀器的人可以通過設備訪問投影片，並且可以閱讀幻燈片上的所有文本，並獲得關於圖片等內容的替代描述。
          </li>
          <li>
            另一方面，如果您在手機上打開了投影片，希望您會發現這樣做是多麼簡單。無需安裝應用程式，不需要進行登錄等操作。這就像訪問網站一樣簡單。
          </li>
        </ul>
      </Note>
      </Slide>
      <Slide transition="slide">
        <h4>Themes!</h4>
        <Flex>
          <img width="250px" src="image/themes/black.png" alt="Black theme" />
          <img width="250px" src="image/themes/blood.png" alt="Blood theme" />
          <img
            width="250px"
            src="image/themes/dracula.png"
            alt="Dracula theme"
          />
        </Flex>
        <Flex>
          <img width="250px" src="image/themes/league.png" alt="League theme" />
          <img width="250px" src="image/themes/sky.png" alt="Sky theme" />
          <img width="250px" src="image/themes/white.png" alt="White theme" />
        </Flex>
        <Note>
            如果您不想從頭開始創建您的配色方案並選擇字體配對，系統內建了一些漂亮的主題。
        </Note>
      </Slide>
      <section data-auto-animate data-transition="zoom">
        <h4>當然還有...</h4>
      </section>
      <section data-auto-animate>
        <h4>當然還有...</h4>
        <h4>動畫效果！</h4>
      </section>
      <section data-transition="fade">
          <h4>動畫效果！!</h4>
      </section>
      <section data-transition="concave">
        <h4>動畫效果！!!</h4>
      </section>      
      <section data-transition="zoom">
        <h4>動畫效果！!!!</h4>
      </section>
      <section data-transition="rotate">
        <h4>動畫效果！!!!!</h4>
      </section>      
      <section data-transition="none">
        <h4>動畫效果！!!!!!</h4>
      </section>   
      <Note>
            說說金城武的笑話?
        </Note>    
    </Slide>
  </>
);

export default AboutRevealSlides;
