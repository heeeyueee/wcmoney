import styled from 'styled-components';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Money from 'views/Home/Money';
import React from 'react';


const Wrapper = styled.div`
 margin: 5px auto 0;
 font-size: 16px;
 font-weight: 700;
 border-radius: 10px;

 max-width: 141px;
 text-align: center;
`;

const MoneyLink: React.FC = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Wrapper>
        <Link to={`${url}/money`}>记账</Link>
      </Wrapper>
      <Switch>
        <Route path={`${path}/:money`} component={Money} />
      </Switch>
    </div >
  )
}

export { MoneyLink }