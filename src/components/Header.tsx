import * as React from 'react';
import { LoginContext } from '../App';

interface Props {}

const Header = (props: Props) => (
  <LoginContext.Consumer>
    {ctx => (
      <header>
        Search for a movie
        {ctx && ctx.userName ? <span> {ctx.userName}</span> : null}
      </header>
    )}
  </LoginContext.Consumer>
);

export default Header;
