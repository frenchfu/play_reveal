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
        </Slide>
    </Slide>
  </>
);

export default SuggessionSlides;
