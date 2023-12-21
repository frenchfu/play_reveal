import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import Bash from '../Components/Highlight/Bash';
import JSX from '../Components/Highlight/JSX';
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
`;

const codeOfNpos = `
@ApiOperation("Checkout")
@Description("CHECK_OUT_URL")
@Encrypt
@PostMapping(CheckoutController.CHECK_OUT_URL)
public ResponseEntity<CheckoutResponse> checkout(HttpServletRequest 
    request, @RequestBody @Decrypt CheckoutRequest requestBody) throws Exception {
    CheckoutResponse resultResponse = checkoutService.doCheckoutAccount(requestBody);
    objectMapper.configure(SerializationFeature.WRITE_NULL_MAP_VALUES, false);
    return ResponseEntity.ok(resultResponse);
}
`;

const GrowUpSlides = () => (
  <>    
    <Slide transition="convex">
        <Slide transition="convex">
            <h1>• 未來發展規劃</h1>
        </Slide>
        <Slide data-auto-animate  transition="convex" >
            <h2 className="h2-list">• REACT技術終於成為大師</h2>
            <Note>
                <ul>
                    <li>報稅抽獎開發使用REACT，並做到單一專案前後分離。</li>
                </ul>
            </Note> 
        </Slide>
        <Slide data-auto-animate  transition="convex" >
                <img
                    width="800vw"
                    src="image/報稅抽獎.jpg"
                    alt="QR code that links to these slides"
                />
        </Slide>        
        <Slide data-auto-animate >
            <h3  className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
        </Slide>
        <Slide data-auto-animate  transition="convex" >
                <img
                    width="800vw"
                    src="image/npos加解密圖.jpg"
                    alt="QR code that links to these slides"
                />
        </Slide>
        <Slide data-auto-animate  transition="convex" >
            <JSX code={codeOfNpos} />
            <Note>
                <ul>
                    <li>之後可以看看有什麼適合的共用功能，定義出更多好用的 annotation</li>
                </ul>
            </Note>
        </Slide>
        <Slide data-auto-animate>
            <h2 className="h2-list">• 熟悉Jenkins設定</h2>
            <h3 className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h3 className="h2-list">1. 可以利用JENKINS佈署到TOMCAT</h3>
            <h3 className="h2-list">2. 可以配合JENKINS實作測試覆蓋率</h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h3 className="h2-list">• 熟悉Jenkins設定</h3>
            <h3 className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 className="h2-list">• 傳承技術的能力</h2>
            <h3 className="h2-list">• 熟悉Jenkins設定</h3>
            <h3 className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
            <Note>
                <ul>
                    <li></li>
                    <li>可以分享自己的所知幫助其他工程師</li>
                    <li>可以慢慢協助其他同仁能夠COVER我的專案</li>
                </ul>
            </Note>            
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 className="h2-list">• 學習技術的能力</h2>
            <h3 className="h2-list">• 傳承技術的能力</h3>
            <h3 className="h2-list">• 熟悉Jenkins設定</h3>
            <h3 className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
            <Note>
                <ul>
                    <li></li>
                    <li>例如這個簡報就是一個新學的技術，是一個用JAVASCRIPT HTML開發簡報的JS庫</li>
                </ul>
            </Note>   
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h3 className="h2-list">• 學習技術的能力</h3>
            <h3 className="h2-list">• 傳承技術的能力</h3>
            <h3 className="h2-list">• 熟悉Jenkins設定</h3>
            <h3 className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
        </Slide>                     
    </Slide>
  </>
);

export default GrowUpSlides;
