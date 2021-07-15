import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import Icon from '../Icon';


const NavWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 16px 0;
  background: #ffda44;
  .back-icon{
    position: absolute;
    left: 10px;
    padding: 0 15px 0 5px;
    .icon{
      width: 18px;
      height: 18px;
    }
  }
`;
const Title = styled.div`
  font-size: 16px;
  span{padding: 6px;}
`;

type Props = {
  name?: string
}
const TopNav: React.FC<Props> = (props) => {
  const history = useHistory()
  const backOne = () => {
    history.goBack()
  }
  return (
    <NavWrapper>
      {props.name && <div className="back-icon" onClick={backOne}><Icon name={props.name} /></div>}
      <Title>{props.children}</Title>
    </NavWrapper>
  );
}

export default TopNav;