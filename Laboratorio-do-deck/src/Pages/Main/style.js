import styled from "styled-components";

export const ContanierNavbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #0c0c0c;
  display: flex;

  @media (max-width: 1294px) {
    height: 300px;
    flex-direction: column;
  }
`;

export const Link = styled.div`
  height: 45px;
  color: #dfe4ea;
  text-decoration: none;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

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
