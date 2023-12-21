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
public ResponseEntity<CheckoutResponse> checkout(HttpServletRequest request, @RequestBody @Decrypt CheckoutRequest requestBody) throws Exception {
    log.info("Checkout Request seqNo => {}, sendTime => {}, orderNo => {}", requestBody.getSeqNo(), requestBody.getSendTime(), requestBody.getOrderNo()); 
    
    CheckoutResponse resultResponse = checkoutService.doCheckoutAccount(requestBody);
    objectMapper.configure(SerializationFeature.WRITE_NULL_MAP_VALUES, false);
    return ResponseEntity.ok(resultResponse);
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
