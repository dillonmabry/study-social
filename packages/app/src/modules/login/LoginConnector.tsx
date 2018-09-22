import * as React from 'react'
import { LoginView } from './view/LoginView';
import { LoginController } from '@studysocial/controller';
import { SecureStore } from 'expo';
import { SESSION_KEY } from '../shared/Constants';

export class LoginConnector extends React.PureComponent {
    saveSessionId = (sessionId: string) => {
        SecureStore.setItemAsync(SESSION_KEY, sessionId);
    }
    render() {
        return (
        <LoginController onSessionId={this.saveSessionId}>
         {
            ({ submit }) => <LoginView submit={submit} />
         }
        </LoginController>
        );
    }
}