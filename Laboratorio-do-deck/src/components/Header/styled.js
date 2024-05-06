import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 152px;
  background-color: #00261c;
  display: flex;

  @media (max-width: 1614px) {
    flex-direction: column;
    height: 378px;
  }

  #logo1 {
    height: 60px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;

    @media (max-width: 1614px) {
      display: none;
    }
  }

  #logo2 {
    height: 150px;
    margin-left: 400px;

    @media (max-width: 1614px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 390px) {
      height: 100px;
    }
  }

  .btn-group {
    margin-left: auto;
    width: 700px;
    display: flex;

    @media (max-width: 1669px) {
      width: 500px;
      margin-left: 50px;
    }

    @media (max-width: 1614px) {
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      width: 90%;
    }

    div {
      display: flex;
      margin-left: 30px;
      width: 180px;

      @media (max-width: 1614px) {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
      }
      button {
        margin-top: auto;
        margin-bottom: auto;
        width: 100%;
      }
    }
  }
`;
