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

const FutureSlides = () => (
  <>    
    <Slide transition="fade">
        <Slide transition="convex">
            <h1 className="h2-list">• 未來發展規劃</h1>
        </Slide>
        <Slide data-auto-animate  transition="fade" >
            <h2 className="h2-list">• 可以漸漸轉向設計架構為主</h2>
            <Note>
                <ul>
                    <li>例如創建一個泛用的框架， 可以選用想用的功能</li>
                </ul>
            </Note> 
        </Slide>
        <Slide data-auto-animate  transition="fade" >
            <h3 className="h2-list">• 增加CODE REVIEW的工作</h3>
            <h3 className="h2-list">• 可以漸漸轉向設計架構為主</h3>
            <Note>
                <ul>
                    <li>和同仁互相幫忙注意到對方的漏洞， 增加代碼品質 增進其他工程師水平</li>
                </ul>
            </Note> 
        </Slide>      
        <Slide data-auto-animate  transition="fade" >
            <h3 className="h2-list">• 開發更多可以重複使用的工具</h3>
            <h3 className="h2-list">• 增加CODE REVIEW的工作</h3>
            <h3 className="h2-list">• 可以漸漸轉向設計架構為主</h3>
            <Note>
                <ul>
                    <li>希望明年可以推組織資產</li>
                </ul>
            </Note> 
        </Slide>      
        <Slide data-auto-animate  transition="fade" >
            <h3 className="h2-list">• 提供更多可以共用的服務</h3>
            <h3 className="h2-list">• 開發更多可以重複使用的工具</h3>
            <h3 className="h2-list">• 增加CODE REVIEW的工作</h3>
            <h3 className="h2-list">• 可以漸漸轉向設計架構為主</h3>
            <Note>
                <ul>
                    <li>例如BEACON POSSERVER 等等</li>
                </ul>
            </Note> 
        </Slide>      
        <Slide data-auto-animate  transition="fade" >
            <h3 className="h2-list">• 英文能力的進步</h3>
            <h3 className="h2-list">• 提供更多可以共用的服務</h3>
            <h3 className="h2-list">• 開發更多可以重複使用的工具</h3>
            <h3 className="h2-list">• 增加CODE REVIEW的工作</h3>
            <h3 className="h2-list">• 可以漸漸轉向設計架構為主</h3>
            <Note>
                <ul>
                    <li>英文是接收第一手知識的捷徑</li>
                </ul>
            </Note> 
        </Slide>           
    </Slide>
  </>
);

export default FutureSlides;
