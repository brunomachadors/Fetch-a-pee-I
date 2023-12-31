import styled from 'styled-components';

export const Bar = styled.div`
  background-color: rgba(38, 38, 38, 1);
  min-width: 320px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  color: white;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #303030;
  z-index: 1;
  position: relative;

  @media (max-width: 1080px) {
    height: 83%;
    width: 40%;
    justify-content: flex-end;
    position: relative;
    margin-bottom: 125px;
  }

  @media (max-width: 1080px) {
    height: 84%;
    position: relative;
  }

  @media (max-width: 720px) {
    height: 40%;
    width: 100%;
    justify-content: flex-end;
    position: absolute;
    bottom: 0px;
    margin-bottom: 0px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  color: white;
  font-size: 20px;

  :hover {
    background-color: #202020;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props.selected ? 'black' : '#303030')};
  border: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 1px;
    background-color: #ffd9006e;
    position: absolute;
    bottom: 0;
    left: 25%;
  }

  :active {
    box-shadow: none;
    border: none;
  }

  ${(props) => props.selected && `border-left: 4px solid #ffd900a3;`}
`;

export const Item = styled.li`
  width: 100%;
  margin-top: 30px;
  color: #bcbbbb;
`;

export const Name = styled.p``;
