import styled from "styled-components";

export const TodoItem = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 10px;
  flex-wrap: wrap;
`;

export const TodoButtons = styled.div`
  display: flex;
  column-gap: 10px;
  flex-grow: 1;
  justify-content: right;
`

export const TodoTitle = styled.div<{ checked: boolean }>`
  ${({ checked }) => checked && `text-decoration: line-through;`}
  padding: 0.6rem;
  width: 50%;
  flex-grow: 1;
`;
