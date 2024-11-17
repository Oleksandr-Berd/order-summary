import * as SC from "./CardStyled";

import carPic from "../../assets/images/illustration-hero.svg";
import musicPic from "../../assets/images/icon-music.svg";

const Card: React.FC = () => {
  return (
    <SC.CardCon>
      <SC.HeroImgCon>
        <img src={carPic} alt="hero" />
      </SC.HeroImgCon>
      <SC.ContentCon>
        <SC.CardTitle>Order Summary</SC.CardTitle>
        <SC.CardContent>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </SC.CardContent>
        <SC.SubscriptionCon>
          <img src={musicPic} alt="music" />
          <div>
            <h4>Annual Plan</h4>
            <p>$59.99/year</p>
          </div>

          <a href="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/">
            Change
          </a>
        </SC.SubscriptionCon>
        <SC.ButtonCon>
          <button type="button">Proceed to Payment</button>
          <button type="button">Cancel Order</button>
        </SC.ButtonCon>
      </SC.ContentCon>
    </SC.CardCon>
  );
};

export default Card;
<div></div>;
