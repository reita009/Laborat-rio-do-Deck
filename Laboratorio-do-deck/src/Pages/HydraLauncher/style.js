import styled from "styled-components";

export const ContainerHydraLauncher = styled.div`
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

  @media (max-width: 775px) {
    width: 100%;
  }

  h1 {
    font-size: 75px;
    @media (max-width: 1614px) {
      font-size: 45px;
    }
  }
`;

export const Banner = styled.div`
  width: 90vw;
  height: 400px;
  display: flex;
  margin-bottom: 65px;

  img {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 150px;

    @media (max-width: 776px) {
      height: 300px;
    }
    @media (max-width: 594px) {
      height: 200px;
    }
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

    @media (max-width: 1664px) {
      flex-direction: column;
      align-items: center;
    }

    div {
      width: 50%;
    }

    .left {
      display: flex;
      flex-direction: column;
      padding: 12px;

      @media (max-width: 1664px) {
        margin-bottom: 40px;
        width: 100%;
      }

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

      @media (max-width: 1664px) {
        margin-bottom: 40px;
        width: 100%;
      }

      .hydraGit {
        border-radius: 20px;
      }

      img {
        margin: auto;
        height: 400px;

        @media (max-width: 1664px) {
          height: 200px;
        }
      }
    }
  }
`;

export const SafeContainer = styled.div`
  width: 100%;
  background-color: #0c0c0c;
  color: #dfe4ea;
  display: flex;

  .container {
    display: flex;
    padding-bottom: 20px;

    @media (max-width: 1664px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 12px;

    @media (max-width: 1664px) {
      margin-bottom: 40px;
      width: 100%;
    }

    img {
      margin-top: auto;
      margin-bottom: 20px;
      border-radius: 20px;

      @media (max-width: 874px) {
        height: 330px;
        width: 330px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 12px;

    @media (max-width: 1664px) {
      width: 100%;
    }

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
