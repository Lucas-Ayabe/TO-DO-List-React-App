import styled from "styled-components";

const AppCard = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
  border-radius: 4px;
  background: var(--darker);
  box-shadow: 0 6px 12px rgba(30, 30, 30, 0.3);
`;

const AppCardBody = styled.div`
  padding: 1.25rem 1.75rem;
`;

export { AppCardBody };
export default AppCard;
