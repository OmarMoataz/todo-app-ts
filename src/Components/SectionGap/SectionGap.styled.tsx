import styled from 'styled-components';


export const SectionGapContainer = styled.div<{ gap: number }>`
  margin-bottom: ${(props) => `${props.gap}px` || "10px"};
`
