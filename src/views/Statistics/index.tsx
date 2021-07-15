import React, { useState } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { OverviewChart } from './ChartLibs/OverviewChart';
import { ExpensesChart } from './ChartLibs/ExpensesChart';
import { IncomeChart } from './ChartLibs/IncomeChart';
import Layout from 'components/Layout';
import styled from 'styled-components';

const Wrapper = styled.section`
font-size: 14px;
background:#ffda44;

  > ul {
    display:flex;
    justify-content: center;
    padding-bottom: 10px;
    > li:nth-of-type(1){
      border-top-left-radius:5px;
      border-bottom-left-radius:5px;
    }
    > li:nth-of-type(3){
      border-top-right-radius:5px;
      border-bottom-right-radius:5px;
    }
    > li {
      border:1px #343233 solid;
      padding: 5px 24px;
      background:#ffda44;
      color: #000;
      &.selected{
        background-color:#343233;
        color: #fff;
      }
    }
  } 
`;
const Statistics: React.FC = () => {
  let { path, url } = useRouteMatch();
  const [text, setText] = useState('概览');
  const onclick = (newText: string) => {
    setText(newText)
  }
  return (
    <Layout name="统计">
      <Wrapper>
        <ul>
          <li className={text === '概览' ? 'selected' : ''} onClick={() => { onclick('概览') }}>
            <Link to={`${url}/overview`}>概览</Link>
          </li>
          <li className={text === '支出' ? 'selected' : ''} onClick={() => { onclick('支出') }}>
            <Link to={`${url}/expenses`}>支出分析</Link>
          </li>
          <li className={text === '收入' ? 'selected' : ''} onClick={() => { onclick('收入') }}>
            <Link to={`${url}/income`}>收入分析</Link>
          </li>
        </ul>
      </Wrapper>
      <Switch>
        <Route exact path={`${path}/overview`} component={OverviewChart} />
        <Route exact path={`${path}/expenses`} component={ExpensesChart} />
        <Route exact path={`${path}/income`} component={IncomeChart} />
        <Redirect exact from="/statistics" to={`${url}/overview`} />
      </Switch>
    </Layout>
  );
};

export default Statistics;