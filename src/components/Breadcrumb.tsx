import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from '../../node_modules/@types/react-router';

interface Props {}

class Breadcrumb extends React.Component<RouteComponentProps<Props>, any> {
  history: string[] = [];

  render() {
    const { location } = this.props;
    this.history.push(location.pathname);
    console.log(this.history);

    return <li className="breadcrumbs">{location.pathname}</li>;
  }
}

export default withRouter(Breadcrumb);
