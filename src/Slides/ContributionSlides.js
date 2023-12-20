import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';



const IndexSlides = () => (
  <>    
    <Slide transition="concave">
        <Slide transition="concave">
            <h1 className="h2-list">• 本年度貢獻度</h1>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h1 className="h2-list">• 支援6000專案</h1>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 >• 支援文化幣專案</h2>
            <h3 className="h2-list">• 支援6000專案</h3>
        </Slide>    
        <Slide data-auto-animate transition="concave">
            <h2 >支援三星專案</h2>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 >支援報稅抽獎</h2>
            <h3 className="h2-list">•支援三星專案</h3>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 > 支援簡訊</h2>
            <h3 className="h2-list">• 支援報稅抽獎</h3>
            <h3 className="h2-list">• 支援三星專案</h3>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 > 同時也維護好各個專案 </h2>
            <h3 className="h2-list">• 支援簡訊</h3>
            <h3 className="h2-list">• 支援報稅抽獎</h3>
            <h3 className="h2-list">• 支援三星專案</h3>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
        </Slide>
        <Slide data-auto-animate transition="fade">
            <h2 > 總之就是 </h2>
        </Slide>
        <Slide data-auto-animate transition="fade">
            <h3 > 哪裡需要我，哪裡就有DAVID </h3>
        </Slide>
        <Slide data-auto-animate transition="none">
            <h3 > 哪裡需要我，哪裡就有金秀賢 </h3>
        </Slide>
        <Slide data-auto-animate transition="none">
            <h3 > 當然　也有好好的傳承技術！！！ </h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h3 > 當然　也有好好的傳承技術！！！ </h3>
            <h3 > 教學相長 </h3>
        </Slide>        
    </Slide>
  </>
);

export default IndexSlides;
