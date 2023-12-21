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

const SuggessionSlides = () => (
  <>    
    <Slide transition="slide">
        <Slide transition="slide">
            <h2 className="h2-list">• 對部群建議與期許</h2>
        </Slide>
        <Slide data-auto-animate  transition="slide" >
            <h2 className="h2-list">• 可以考慮嘗試Pair programming</h2>
        </Slide>
        <Slide data-auto-animate  transition="convex" >
                <img
                    width="800vw"
                    src="image/pairProgramming.jpg"
                    alt="QR code that links to these slides"
                />
                <Note>
                    <ul>
                    <li></li>
                    <li>提升程式碼品質</li>
                    <li>提升知識傳播效率</li>
                    <li>提升團隊運行效率</li>
                    <li>增進團隊默契</li>
                    <li>打算在新的工程師試試看</li>
                    <li>開玩笑 老工程師可以只動口</li>
                    </ul>
            </Note>
        </Slide>
    </Slide>
  </>
);

export default SuggessionSlides;
