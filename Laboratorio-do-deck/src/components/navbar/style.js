import styled from "styled-components";

export const ContanierNavbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #0c0c0c;

  @media (max-width: 1294px) {
    height: 300px;
  }
`;

export const Link = styled.a`
  width: 200px;
  height: 45px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 3px;
  color: #dfe4ea;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#198754" : "")};

  &&:hover {
    color: #ffb142;
  }

  @media (max-width: 1294px) {
    width: 90%;
    text-align: center;
  }
`;

// ${props => props.size }
