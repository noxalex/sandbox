import * as React from "react";
import {
  RouteComponentProps,
  StaticContext
} from "../../node_modules/@types/react-router";

interface Props extends RouteComponentProps<any, StaticContext, any> {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login = (props: Props) => {
  const onSubmit = () => {
    props.history.push("/search");
  };

  return (
    <form onSubmit={onSubmit}>
      <header> Please, enter your name first </header>
      <label>Name</label>
      <input
        type="text"
        placeholder="your name goes here"
        value={props.userName}
        onChange={props.onChange}
      />
      <input type="submit" value="enter" />
    </form>
  );
};

export default Login;
