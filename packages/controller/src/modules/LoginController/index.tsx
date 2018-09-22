import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes.ts/LoginMutation';
import { normalizeErrors } from '../../utils/NormalizeErrors';

interface Props {
    onSessionId?: (sessionId: string) => void;
    children: (
        data: { submit: (values: LoginMutationVariables) => Promise<any> }
    ) => JSX.Element | null;
}

export class LC extends React.PureComponent<
    ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
    submit = async(values: LoginMutationVariables) => {
        console.log("Logging in " + values.email + " " + values.password);
        const {
            data: {
                login: { errors, sessionId }
            }
        } = await this.props.mutate({
            variables: values
        });
        console.log("response: ", errors, sessionId);
        if (errors) {
            return normalizeErrors(errors)
        };
        if (sessionId && this.props.onSessionId) {
            this.props.onSessionId(sessionId);
        }
        return null;
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        errors {
          path
          message
        }
        sessionId
    }
  }
`;

export const LoginController = graphql<
    Props,
    LoginMutation,
    LoginMutationVariables
    >(loginMutation)(LC);