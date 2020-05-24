import styled, { css } from "styled-components";

const AppButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-family: var(--family);
  font-size: 1em;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.625rem 1.25rem;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.color === "primary" &&
    css`
      background-color: var(--primary);
      color: var(--darker);

      :hover {
        background-color: #4fa6e0;
      }

      :active {
        background-color: #72b8e6;
      }
    `};

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 4px;
    `};

  ${(props) =>
    props.circle &&
    css`
      border-radius: 100px;
    `};

  ${(props) =>
    props.raised &&
    props.color === "primary" &&
    css`
      box-shadow: 0 2px 4px rgba(20, 136, 214, 0.3);

      :hover,
      :focus {
        box-shadow: 0 4px 8px rgba(20, 136, 214, 0.3);
      }

      :active {
        box-shadow: 0 7px 14px rgba(20, 136, 214, 0.3);
      }
    `};
`;

export default AppButton;
