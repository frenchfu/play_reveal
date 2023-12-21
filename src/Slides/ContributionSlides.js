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
            <Note>
                <ul>
                    <li>協助了CICD和CDN測試</li>
                </ul>
            </Note>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 >• 支援文化幣專案</h2>
            <h3 className="h2-list">• 支援6000專案</h3>
            <Note>
                <ul>
                    <li>開發票券交易功能</li>
                    <li>戶役政和健保署介接</li>
                    <li>抽獎功能核心</li>
                    <li>紙本，官網CDN優化，簡訊等等等</li>
                </ul>
            </Note>
        </Slide>    
        <Slide data-auto-animate transition="concave">
            <h2 >支援三星專案</h2>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
            <Note>
                <ul>
                    <li>撰寫便利的加解密層</li>
                </ul>
            </Note>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 >支援報稅抽獎</h2>
            <h3 className="h2-list">•支援三星專案</h3>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
            <Note>
                <ul>
                    <li>包含套版抽獎和開發後台維護功能</li>
                </ul>
            </Note>            
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 > 支援簡訊</h2>
            <h3 className="h2-list">• 支援報稅抽獎</h3>
            <h3 className="h2-list">• 支援三星專案</h3>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
            <Note>
                <ul>
                    <li>包含優化功能和跳轉DB2和協助OKTA介接</li>
                </ul>
            </Note>                 
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 > 同時也維護好各個專案 </h2>
            <h3 className="h2-list">• 支援簡訊</h3>
            <h3 className="h2-list">• 支援報稅抽獎</h3>
            <h3 className="h2-list">• 支援三星專案</h3>
            <h3 className="h2-list">• 支援文化幣專案</h3>
            <h3 className="h2-list">• 支援6000專案</h3>
            <Note>
                <ul>
                    <li>N00526也繼續維運，地政包含金流，農委會 外籍E指購 </li>
                    <li>老盟和台灣夢，報稅金流開發 </li>
                </ul>
            </Note>                  
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
            <Note>
                <ul>
                    <li>資服除了我之外有另外兩個工程師可以開發REACT了 </li>
                    <li>對於REACT也有開課程傳授 </li>
                </ul>
            </Note>     
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h3 > 當然　也有好好的傳承技術！！！ </h3>
            <h3 > 教學相長 </h3>
            <Note>
                <ul>
                    <li>從FEEBACK獲得更多成長 </li>
                </ul>
            </Note> 
        </Slide>        
    </Slide>
  </>
);

export default IndexSlides;
