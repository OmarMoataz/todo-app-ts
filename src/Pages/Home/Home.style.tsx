import styled from 'styled-components';

export const HomeContainer = styled.div`
  
  ${({ theme }) => theme.media.phone && 'margin: 0 5px;'}
`