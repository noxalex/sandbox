import * as React from 'react';
import { LoginContext } from '../App';

interface Props {
  rocketLaunch: { details: string };
}

const Header = (props: Props) => (
  <LoginContext.Consumer>
    {ctx => (
      <header>
        <p style={{ width: '500px', fontSize: '18px' }}>
          Latest SpaceX rocket launch:
          {props.rocketLaunch.details}
        </p>
        Search for a movie
        {ctx && ctx.userName ? <span> {ctx.userName}</span> : null}
      </header>
    )}
  </LoginContext.Consumer>
);

export default Header;
