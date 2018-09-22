import * as React from 'react';
import { LoginController } from '@studysocial/controller';
import { LoginView } from './view/LoginView';


export class LoginConnector extends React.PureComponent {
    render() {
        return (
            <LoginController>
                {({submit}) => <LoginView submit={submit} />}
            </LoginController>
        );
    }
}