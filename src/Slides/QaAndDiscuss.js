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
        <Slide data-auto-animate  transition="convex" >
                <img
                    width="800vw"
                    src="image/QA.webp"
                    alt="QR code that links to these slides"
                />
        </Slide>
        <Slide data-auto-animate  transition="convex" >
                <img
                    width="800vw"
                    src="image/discuss.jpg"
                    alt="QR code that links to these slides"
                />
        </Slide>
        <Slide data-auto-animate  transition="convex" >
                <img
                    width="800vw"
                    src="image/takeabow.png"
                    alt="QR code that links to these slides"
                />
        </Slide>                         
    </Slide>
  </>
);

export default GrowUpSlides;
