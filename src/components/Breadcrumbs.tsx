import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from '../../node_modules/@types/react-router';

interface Props {}

class Breadcrumbs extends React.Component<RouteComponentProps<Props>, any> {
  history: string[] = [];

  render() {
    const { location } = this.props;
    this.history.push(location.pathname);
    console.log(this.history);

    return (
      <ul className="breadcrumbs">
        <li className="breadcrumb-item">{location.pathname}</li>
      </ul>
    );
  }
}

export default withRouter(Breadcrumbs);
