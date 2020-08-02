import styled from 'styled-components'

const Button = styled.button`
  background-color: #20222a;
  border-radius: 15px;
  color: white;
  cursor: pointer;transition: 0.5s;
  width: 100%;
  padding: 10px;
  outline: none;

  &:hover{
  background: #353946;
  transition: 0.5s;
  }

  &:disabled{
  border: 3px solid #20222a88;
  color: #20222a;
  background: #20222a38;
  cursor: default;
  }
`

export default Button
