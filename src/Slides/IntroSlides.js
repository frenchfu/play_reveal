import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import Link from '../Components/Link';

const IntroSlides = () => (
  <>
    <Slide>
      <img
        width="250px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAEWCAAAAACGJueTAAACoklEQVR42u3bMXKEQAwEQP7/aZy7TGkkuHLpaGVwu9pRk2xyx6n+qAMBFixYsGDBggULFixYsCgsWLBgwYIFCxYsL2A5hnW1v9v39/qr56fyYsGCBQsWLFj2s5zp/eeh9d2xP5QXCxYsWLBgwbKYZXrtml7P7rLcZMSCBQsWLFiwvIjlDPum5065sWDBggULFixY0mOu1lcs3X5YsGDBggULFixnWM1jy9jd9XfzYsGCBQsWLFj2s3QrZfrU8zQvFixYsGDBgmUvy1OVxq/2V+uejo0FCxYsWLBg2cNSXZ/S+NP3KWuVezgPFixYsGDBguWLWCqmbswuf/VZKr4qNhYsWLBgwYJlD0s3fnpt68bvXt+6fbFgwYIFCxYs+1mG7f7t790VQ5ofCxYsWLBgwXKsY0mPO4o6m/27DN28IQ8WLFiwYMGCZRHLVYwu0/R9OkbKl7JiwYIFCxYsWPaypO2mXFU91RcLFixYsGDB8j6WsG0ZpzvuU+dhwYIFCxYsWL6fpRs/5ajipizp7yEvFixYsGDBgmURS3pcuq8Zq913yoQFCxYsWLBg2c8yvZal+1Kuu9e0lBELFixYsGDBspclbZ+yVbGq993z0zxYsGDBggULlv0s02OrMW/GbV8n07xYsGDBggULlr0sd+tTrCnjzf1YsGDBggULlkUsx8PXpnScarxPcWPBggULFixY9rNM43d5U440X8qEBQsWLFiwYPk+lmqcbszpuF3uYX8sWLBgwYIFC5Yydrpvyh4WFixYsGDBguVFLN1x0rGm65qfAwsWLFiwYMGymKWqNO7TbNW6bi4sWLBgwYIFy16WbnXHuYr51P7uZ8CCBQsWLFiw7GN5eWHBggULFixYsGDBggULFoUFCxYsWLBgwYLlm+oHoOar+3Z4AlIAAAAASUVORK5C"
        alt="QR code that links to these slides"
      />
      <p color="black">Slides:</p>
      <Link href="building-talks-with-reveal-js.katcodes.co.uk/">
        building-talks-with-reveal-js.katcodes.co.uk/
      </Link>
      <br/>
      <Link href="building-talks-with-reveal-js.katcodes.co.uk/">
        https://github.com/frenchfu/play_reveal
      </Link>      
      <Note>
        <ul>
          <li>
            <li>1</li>
            {/* add accessibility feature */}
            介紹我的GITHUB和引用
          </li>
          <li>
            說個QRCODE的笑話
            哪兩個英文字母最冷
.           QR 因為QR code
          </li>
        </ul>
      </Note>
    </Slide>
  </>
);

export default IntroSlides;
