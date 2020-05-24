import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

// Styles
const SearchBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchField = styled(AppInput)`
  flex: 1;
  border-radius: 4px 0 0 4px;
`;

const SearchButton = styled(AppButton)`
  flex: 0 0 auto;
  padding: 10px 20px;
  font-size: 1.25rem;
  border-radius: 0 4px 4px 0;
`;

function Search(props) {
  // Logic
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    return handleSubmit(value) ?? null;
  };

  const clearValue = () => setValue("");

  const handleSubmit = (value) => {
    clearValue();
    return props.onSubmit(value) ?? null;
  };

  useEffect(() => {
    if (props.onSearchChange) {
      props.onSearchChange(value);
    }
  }, [props, value]);

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  // Markup
  return (
    <SearchBox>
      <SearchField
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        placeholder={props.placeholder}
      />
      <SearchButton onClick={handleClick} color="primary">
        Adicionar
      </SearchButton>
    </SearchBox>
  );
}

export default Search;
