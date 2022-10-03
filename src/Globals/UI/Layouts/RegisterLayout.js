import React, {useContext} from 'react';


import { 
    Container,
     Card, 
     Form, 
     Title
} from '../../UI';


const LoginLayout = () => {
    
    return (
        <>
            <Title>Register</Title>
            <Container>
                <Card height={"auto"}>
                    <Form 
                    type={"REGISTER"} 
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
                        },
                        {
                            name: "confirm_password",
                            placeholder: "Confirmez votre mot de passe",
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