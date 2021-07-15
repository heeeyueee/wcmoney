import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';


const NavWrapper = styled.nav`
//z-index: 99;
    background-color:#F9FAF5;
    >ul{
      box-shadow:0px -1px 3px  #b8b8b8;
      display: flex;
      >li{
       
         flex: 1;
         text-align: center;
         padding: 8px 0 ;
         .uni{
           box-shadow:0px -1px 1px  #343233;
          
          margin-top: -30px;
          height:50px;
          width: 50px;
          border-radius: 50%;
          background-color:#ffda44;
          border:5px solid #F9FAF5;
          margin-bottom: 3px;
          .icon{
            width: 24px;
          height: 24px;
            margin-top: 8px;
            fill:#343233;  
          }
         }
         .selected{
          .icon{fill:#343233}
         }
         .icon{
          width: 24px;
          height: 24px;
          fill:#b7bdcd;
         } 
       a{
         font-size: 14px;
         display: flex;
         flex-direction: column;
         align-items: center;
         color: #b7bdcd;
       }
      }
    }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>

        <li>
          <NavLink to="/detail" activeClassName="selected">
            <Icon name="detail" />
            明细
          </NavLink>
        </li>
        <li>

          <NavLink to="/home" activeClassName="selected">
            <div className="uni"><Icon name="addrecord" /></div>
            记账
          </NavLink>

        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;