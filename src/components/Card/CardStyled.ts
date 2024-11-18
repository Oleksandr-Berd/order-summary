import styled from "styled-components";

export const CardCon = styled.div`
  padding-bottom: 32px;

  background-color: #fff;

  border-radius: 20px;

  overflow: hidden;

  @media (min-width: 1280px) {
    width: 450px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroImgCon = styled.div`
  margin-bottom: 32px;

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }

  & > img {
    width: 327px;
    height: 160px;

    @media (min-width: 1280px) {
      width: 450px;
      height: 220px;
    }
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

  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const CardContent = styled.p`
  margin-bottom: 24px;

  font-size: 15px;

  color: #717fa6;

  @media (min-width: 1280px) {
    margin-bottom: 20px;

    font-size: 16px;
    line-height: 1.63;
  }
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

  @media (min-width: 1280px) {
    padding-left: 24px;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;

    margin-bottom: 32px;
  }

  & > a {
    font-size: 13px;
    font-weight: 800;

    color: #382ae1;

    text-decoration: underline;

    @media (min-width: 1280px) {
      margin-left: 94px;

      font-size: 14px;
      transition: color 1s linear;

      &:hover,
      &:focus,
      &:active {
        color: #766cf1;
        transition: color 1s linear;
      }
    }
  }
`;
export const PriceCon = styled.div`
  & > h4 {
    font-size: 14px;

    color: #1f2e55;

    @media (min-width: 1280px) {
      margin-bottom: 6px;

      font-size: 16px;
    }
  }

  & > p {
    font-size: 14px;

    color: #717fa6;

    @media (min-width: 1280px) {
      font-size: 16px;
    }
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
    transition: background-color 1s linear;

    @media (min-width: 1280px) {
      margin-bottom: 32px;

      background-color: #766cf1;
      transition: background-color 1s linear;
      cursor: pointer;
    }
  }

  & > *:nth-child(2) {
    font-size: 15px;
    font-weight: 900;

    background-color: transparent;
    color: #717fa6;
    transition: color 1s linear;

    @media (min-width: 1280px) {
      color: #1f2e55;
      transition: color 1s linear;
      cursor: pointer;
    }
  }
`;
