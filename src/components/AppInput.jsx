import styled from "styled-components";

const AppInput = styled.input`
  height: 100%;
  border: 2px solid transparent;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 1.25rem;
  border-radius: 4px 4px;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  :focus {
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid var(--primary);
    outline: none;
  }
`;

export default AppInput;
