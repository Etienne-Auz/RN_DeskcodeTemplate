import React from 'react';

import { 
    Container, 
    Card, 
    Form, 
    Title, 
    Link 
} from '../../UI';


const RegisterLayout = () => {
    
    return (
        <>
            <Title>Login</Title>
            <Container>
                <Card style={{
                    height: "auto"
                }}>
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
                <Link 
                    target={"Register"} 
                    style={{
                        top: "40%"
                    }}
                >Pas de compte ?</Link>
            </Container>
        </>
    );
};

export default RegisterLayout;