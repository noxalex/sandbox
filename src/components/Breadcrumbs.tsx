import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RouteComponentProps } from '../../node_modules/@types/react-router';

interface Props extends RouteComponentProps<any> {}

class Breadcrumbs extends React.Component<Props> {
  history: string[] = [];

  componentWillReceiveProps(prevProps: Props) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.history.push(location.pathname);
    }
  }

  render() {
    console.log('history array: ', this.history);

    return (
      <ul className="breadcrumbs">
        {this.history.map(path => (
          <li className="breadcrumb-item" key={path}>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(Breadcrumbs);
