import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom';

const style = {
  marginTop: "100px",
  textAlign: "center" as "center"
};

export class ConfirmationMessage extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    const {
      location: { state }
    } = this.props;
    return (
      <div style={style}>
        <h2>Thank you</h2>
        <h3>{state && state.message ? state.message : 
          "We had an issue sending your confirmation email"}</h3>
        <Link to="/login">Back to Login</Link>
      </div>
    );
  }
}