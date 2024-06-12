import styled from "styled-components";

export const LoaderContent = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: grey;
    margin-top: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoaderText = styled.p`
  font-size: 30px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  text-align: center;
  margin-top: 300px;
`;
