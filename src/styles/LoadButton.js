import styled from 'styled-components';

export const LoadButton = styled.button`
  background-color: #222;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 3px;
  transition: all 200ms ease;
  margin-bottom: 1rem;
  box-shadow: 0 0 35px black;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #222;
    border: 1px solid #222;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
