import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 0;
  margin-top: 0;
`;

export const ListItem = styled.li`
  color: #000000;
  list-style: none;
  text-align: center;
  margin-bottom: 16px;
  width: 100px;
  &:last-child {
    margin-bottom: 0;
  }
`; 

export const Img = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  height: 150px;
`;

export const Title = styled.h3`
  font-size: 16px;
  display: inline-block;
  margin: 8px auto;
`;

export const Paragraph = styled.p`
  margin: 0;
`;