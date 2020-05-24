import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/images/x.svg";
import checkIcon from "../assets/images/check.svg";
import dashIcon from "../assets/images/dash.svg";

const AppList = styled.ul`
  list-style: none;
  max-height: 226px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 274px;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  padding: 0.625rem 1.25rem;

  :first-child {
    border-top: none;
  }

  ::before,
  ::after {
    display: none;
  }

  & > * + * {
    margin-left: 5px;
  }
`;

const ListItemValue = styled.textarea`
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  color: #fff;
  resize: vertical;
  font-family: var(--family);
  font-size: 1.25rem;
`;

function AppListItem(props) {
  const handleDelete = () => {
    props.handleDelete(props.task.id);
  };

  const handleMark = () => {
    props.handleMark(props.task.id);
  };

  const handleChange = ({ target: { value } }) => {
    props.handleChange(props.task.id, value);
  };

  return (
    <ListItem>
      <ListItemValue
        rows="1"
        onChange={handleChange}
        value={props.task.title}
      />
      <div className="o-button-group">
        {props.task.done && (
          <button onClick={handleMark} className="c-icon -circle -checked">
            <img src={checkIcon} alt="Desmarcar" />
          </button>
        )}

        {!props.task.done && (
          <button onClick={handleMark} className="c-icon -circle">
            <img src={dashIcon} alt="Marcar" />
          </button>
        )}
        <button onClick={handleDelete} className="c-icon -circle">
          <img src={closeIcon} alt="Excluir" />
        </button>
      </div>
    </ListItem>
  );
}

export { AppListItem };
export default AppList;
