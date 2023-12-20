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
    @ApiOperation("importSupplier")
    @Description("匯入供應商")
    @PostMapping(value = "/importSupplier",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public String importSupplier(@RequestPart("file") MultipartFile file) throws Exception{
        return vdgdpService.importSuppliers(file);
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
        </Slide>
        <Slide data-auto-animate transition="concave">
            <h2 className="h2-list">• 學習技術的能力</h2>
            <h3 className="h2-list">• 傳承技術的能力</h3>
            <h3 className="h2-list">• 熟悉Jenkins設定</h3>
            <h3 className="h2-list">• 精熟SpringBoot Filter 和 annotation</h3>
            <h3 className="h2-list">• REACT技術終於成為大師</h3>
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
