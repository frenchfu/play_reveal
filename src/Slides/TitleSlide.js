import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';

const TitleSlide = () => (
  <Slide>
    <h2>使用程式寫報表 with Reveal.js (with React)</h2>
    <p>David Fu</p>
    <Note>
      <ul>
        <li>1</li>
        <li>Hi all</li>
        <li>介紹一下REVEAL JS</li>
        <li>Reveal.js 是一个基于 HTML、CSS 和 JavaScript 的开源演示文稿框架，它允许用户创建漂亮的、交互式的幻灯片演示。该框架通过利用现代的 Web 技术，提供了一种创建富有吸引力的演示文稿的方式。</li>
        <li>說個笑話</li>
        <li>一程序员去面试面试官问你毕业才两年，这三年工作经验是怎么来的程序员答加班</li>
      </ul>
    </Note>
  </Slide>
);

export default TitleSlide;
