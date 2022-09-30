import React, {useContext} from 'react';
import { Text } from 'react-native';

import Container from '../Container/Container';
import Card from '../Card/Card';
import Form from '../Form/Form';


const LoginLayout = () => {
    
    return (
        <>
            <Text>Login</Text>
            <Container>
                <Card height={"auto"}>
                    <Form 
                    type={"LOGIN"} 
                    fields={[
                        {
                            name: "mail",
                            placeholder: "Rentrez votre mail",
                            type: "email",
                            required: true
                        },
                        {
                            name: "password",
                            placeholder: "Rentrez votre mot de passe",
                            type: "password",
                            required: true
                        }
                    ]}
                    />
                </Card>
            </Container>
        </>
    );
};

export default LoginLayout;