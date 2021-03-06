import styled from 'styled-components';
import React, { PropsWithChildren } from 'react';

const Wrapper = styled.div`
  margin-top: 38px; 
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{ padding: 5px; font-weight: 700;}
  .title{
    color: #ffda44;
    font-size: 18px;
  }
  .titleWrapper{  
    display:flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 5px solid #9ccac0;
    font-size: 18px;
    padding: 8px; 
    color: rgba(185, 186, 184,0.9);
    & .icon{
      margin-right: 12px;
      width: 38px;
      height: 38px;
      fill:  #9ccac0;
    }
  }
  .pay{
    font-size: 18px;
    color: #ffda44;
  }
  .count{
    margin-top: 10px;
    font-size: 18px;
    color: rgba(185, 186, 184,0.9);
    padding:10px 16px;
    background-color:#f9faf5;
    border-radius: 8px;
  }
  .income{
    margin-top: 15px;
    color: #B7B7B7;
    font-size: 16px;
  }
`;

const ShowMoney = (props: PropsWithChildren<any>) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export { ShowMoney };