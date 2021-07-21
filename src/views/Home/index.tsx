import React from 'react';
import Layout from 'components/Layout';
import { MoneyLink } from 'components/MoneyLink/MoneyLink';

import { useRecords } from 'hooks/useRecords';
import AuthService from "../../services/auth.service";
import day from 'dayjs';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link, useRouteMatch } from 'react-router-dom';

const MonthMoney = styled.div`
 display: flex;
 align-items: center;
 justify-content:space-around;
 span{ padding: 5px; }
 >div{
   padding: 20px;
   display: flex;
   flex-direction: column 
 }
 .first{
  position: relative;
 }
 /* .first:after{    
   position: absolute;    
   top:1.1em;    
   height: calc(100% - 2.2em);    
   left:-2.5em;    
   content: '';    
   width:0;    
   border-left: solid  #b7bdcd 1px;
} */
 .title{
   font-size: 16px;
   color: #b7bdcd;
 }
 .pay{
  font-size: 18px;
  color:#343233;
  font-weight: 800;
 }
`;
const Record = styled.div`
    border: 1px #ffda44 solid;
    width: 80px;
    height: 80px;
    margin:auto;
    border-radius: 50%;
    position: relative;
   .icon{
          width: 30px;
          height: 30px;
         
          position: absolute;
          top: 23px;
          left:25px;
          
          }

`
  ;
const Button = styled.button`
border:none;
position: absolute;
top:60%;
left:50%;
transform: translate(-50%, 0);
padding: 10px;
border:2px solid #ffda44;
border-radius: 6px;
background: #fff;
font-size: 14px;

`;
const Head = styled.h5`
position: absolute;
top:50%;
left:50%;
font-size: 16px;
transform: translate(-50%, 0);
`
  ;
const Home: React.FC = () => {

  const { incomeMoney, expensesMonthMoney } = useRecords();
  //const today = day(new Date()).format('DD');
  const mouth = day(new Date()).format('MM');
  const expenses = expensesMonthMoney(mouth);
  const income = incomeMoney(mouth);
  let { url } = useRouteMatch();
  const logOut = () => {
    AuthService.logout();
  };
  const username = JSON.parse(window.localStorage.getItem('user') || '[]').username
  return (
    <Layout name="记账">
      <MonthMoney>
        <div>
          <span className="title">{parseInt(mouth)}月支出</span>
          <span className="pay">￥{expenses.reduce((preMoney, amount) => {
            return preMoney += amount;
          }, 0)}</span>
        </div>
        <div className="first">
          <span className="title">{parseInt(mouth)}月收入 </span>
          <span className="pay"> ￥{income.reduce((preMoney, amount) => {
            return preMoney += amount;
          }, 0)}</span>
        </div>

      </MonthMoney>
      <Record>
        <Link to={`${url}/money`}> <Icon name="addrecord"></Icon></Link>
        {/* <Icon name="addrecord"></Icon> */}

      </Record>
      <MoneyLink />
      {/* <li className="nav-item"> */}
      <Head>{username}快来记一笔吧！</Head>
      <Link to='/auth' onClick={logOut}> <Button>退出登录</Button></Link>
      {/* <a href="login" className="nav-link" onClick={logOut}>
        LogOut
        </a>
      </li> */}
    </Layout >
  );
};

export default Home;