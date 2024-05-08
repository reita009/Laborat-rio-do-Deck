import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  padding-bottom: 150px;
  background-color: #0c0c0c;
  color: #dfe4ea;
  display: flex;
  flex-direction: column;
`;

export const TitleArea = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 75px;
  }
`;

export const Banner = styled.div`
  width: 90vw;
  height: 400px;
  display: flex;
  margin-top: 30px;

  img {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
  }
`;

export const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #b2bec3;
  color: #1e272e;
  padding-bottom: 20px;

  .container {
    display: flex;

    div {
      width: 50%;
    }

    .left {
      display: flex;
      flex-direction: column;
      padding: 12px;

      h1 {
        font-size: 45px;
        color: #1e272e;
        margin-top: 35px;
      }
      p {
        color: black;
        margin-top: 20px;
        font-weight: 300;
        font-size: 20px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      padding: 12px;

      img {
        margin: auto;
        height: 500px;
      }
    }
  }
`;

export const EmulationContainer = styled.div`
  width: 100%;
  background-color: #0c0c0c;
  color: #dfe4ea;
  display: flex;

  .container {
    display: flex;
    padding-bottom: 20px;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 12px;

    img {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 12px;

    h1 {
      font-size: 45px;
      color: #dfe4ea;
      margin-top: 35px;
      text-align: center;
    }
    p {
      color: #dfe4ea;
      margin-top: 20px;
      font-weight: 500;
      font-size: 20px;
    }
  }
`;
