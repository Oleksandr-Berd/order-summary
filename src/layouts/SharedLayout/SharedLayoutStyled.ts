import styled from "styled-components";

import backMob from "../../assets/images/pattern-background-mobile.svg";
import backDesk from "../../assets/images/pattern-background-desktop.svg";

export const SharedLayoutCustom = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 24px;
  padding-right: 24px;

  font-family: "RedHatDisplay";

  background-image: url(${backMob});
  background-repeat: no-repeat;

  @media (min-width: 1280px) {
    padding: 0;

    background-image: url(${backDesk});
  }
`;
