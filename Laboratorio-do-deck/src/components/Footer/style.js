import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #198754;
  height: 400px;
  width: 100%;
  color: #0c0c0c;
  display: flex;

  @media (max-width: 1218px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 770px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .logo {
      width: 400px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      display: flex;

      img {
        border-radius: 20px;

        @media (max-width: 770px) {
          width: 300px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;
        }
      }
    }

    p {
      font-size: 22px;
      width: 400px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }
  }

  .right {
    @media (max-width: 770px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    width: 50%;
    display: flex;
    flex-direction: column;

    .icons-group {
      display: flex;
      align-items: center;
      width: 600px;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      margin-top: 75px;

      @media (max-width: 770px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 30px;
      }

      img {
        height: 70px;

        @media (max-width: 770px) {
          height: 150px;
        }
      }
      .diferent {
        height: 50px;
        @media (max-width: 770px) {
          height: 130px;
        }
      }
    }
    .info-group {
      display: flex;
      align-items: center;
      width: 600px;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 770px) {
        display: none;
      }
    }

    .name {
      margin-top: auto;
      margin-bottom: 25px;
      margin-left: auto;
      margin-right: 35px;

      @media (max-width: 770px) {
        margin-right: auto;
      }

      span {
        color: #00251b;
      }
    }
  }
`;
