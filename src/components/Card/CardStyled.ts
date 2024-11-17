import styled from "styled-components";

export const CardCon = styled.div`
  padding-bottom: 32px;

  background-color: #fff;

  border-radius: 20px;

  overflow: hidden;
`;

export const HeroImgCon = styled.div`
  margin-bottom: 32px;

  & > img {
    width: 327px;
    height: 160px;
  }
`;

export const ContentCon = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;

  font-size: 22px;

  color: #1f2e55;
`;

export const CardContent = styled.p`
  margin-bottom: 24px;

  font-size: 15px;

  color: #717fa6;
`;

export const SubscriptionCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;

  background-color: #f7f9ff;

  border-radius: 11px;

  & > a {
    font-size: 13px;
    font-weight: 800;

    color: #382ae1;

    text-decoration: underline;
  }
`;
export const PriceCon = styled.div`
  & > h4 {
    font-size: 14px;

    color: #1f2e55;
  }

  & > p {
    font-size: 14px;

    color: #717fa6;
  }
`;

export const ButtonCon = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(1) {
    padding-top: 15px;
    padding-bottom: 15px;

    margin-bottom: 24px;

    font-size: 15px;
    font-weight: 900;

    background-color: #382ae1;
    color: #ffffff;

    border-radius: 11px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }

  & > *:nth-child(2) {
    font-size: 15px;
    font-weight: 900;

    background-color: transparent;
    color: #717fa6;
  }
`;
