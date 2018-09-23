import * as React from 'react';
import { LoginController } from '@studysocial/controller';
import { LoginView } from './view/LoginView';
import { RouteComponentProps } from 'react-router-dom';


export class LoginConnector extends React.PureComponent<RouteComponentProps<{}>> {
    onLogin = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <LoginController>
                {({submit}) => <LoginView onLogin={this.onLogin} submit={submit} />}
            </LoginController>
        );
    }
}