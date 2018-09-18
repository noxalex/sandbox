import * as React from 'react';

import {
  RouteComponentProps,
  StaticContext
} from '../../node_modules/@types/react-router';
import { LoginContext } from '../App';

interface Props extends RouteComponentProps<any, StaticContext, any> {}

const Login = (props: Props) => {
  const onSubmit = () => {
    props.history.push('/search');
  };

  return (
    <form onSubmit={onSubmit}>
      <header> Please, enter your name first </header>
      <label>Name</label>
      <LoginContext.Consumer>
        {ctx => (
          <input
            type="text"
            placeholder="your name goes here"
            value={ctx ? ctx.userName : ''}
            onChange={e => {
              if (ctx) {
                ctx.handleNameChange(e);
              }
            }}
          />
        )}
      </LoginContext.Consumer>
      <input type="submit" value="enter" />
    </form>
  );
};

export default Login;
