
import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const TypeSec = styled.section`
height: 45px;
 background-color: #ffda44;
  font-size: 18px;
  padding: 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  >span{margin:auto}
  .selected{
    border-bottom: 2px solid #000;
   
  } 
`;
const Auth = (props) => {

    const [category, setCategory] = useState('登录');
    return (
        <div >
            <TypeSec>
                <span onClick={() => setCategory('登录')} className={category === '登录' ? 'selected' : ''}>登录</span>
                <span onClick={() => setCategory('注册')} className={category === '注册' ? 'selected' : ''}>注册</span>
            </TypeSec>

            {category === '登录' ? <Login /> : <Register />}
        </div>
    );


}

export default Auth;