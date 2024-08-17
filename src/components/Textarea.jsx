import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #A2FDA2;
    outline: none;
  }
`;

const Textarea = (props) => {
  return <StyledTextarea {...props} />;
};

export default Textarea;
