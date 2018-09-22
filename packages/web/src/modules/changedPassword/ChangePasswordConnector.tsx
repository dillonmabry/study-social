import * as React from 'react';
import { ChangePasswordController } from '@studysocial/controller';
import { ChangePasswordView } from './view/ChangePasswordView';
import { RouteComponentProps } from 'react-router-dom';

export class ChangePasswordConnector extends React.PureComponent
  <RouteComponentProps<{key: string}>> {
    render() {
        const { 
          match: { 
            params: { key } 
          } 
        } = this.props;
        console.log(key);
        return (
            <ChangePasswordController>
              {({submit}) => <ChangePasswordView 
                submit={async({ newPassword}) => submit({key, newPassword})} />}
            </ChangePasswordController>
        );
    }
}