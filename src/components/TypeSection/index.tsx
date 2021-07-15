import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';



const Wrapper = styled.section`
padding-bottom: 5px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
 
  background: #ffda44;
  div{
    border: 1px #343233 solid;
    border-radius: 3px;
    
  }
  span{

    padding: 8px 40px 4px 40px;
    font-size: 14px;
    color: #343233;
  }
  .selected{
    background-color:#343233;
    border: none;
    color: white;

  }
`;

const TypeSection: React.FC = (props: PropsWithChildren<any>) => {

  return (
    <Wrapper>
      <div>
        {props.children}
      </div>
    </Wrapper>
  );
};
export { TypeSection };

