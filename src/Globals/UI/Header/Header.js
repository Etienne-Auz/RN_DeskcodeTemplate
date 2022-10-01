import React, {useContext} from 'react';
import Container from '../Container/Container';
import {Context as AuthContext} from '../../Contexts/AuthContext';
import { Text } from 'react-native';
import Button from '../Button/Button';
import Form from '../Form/Form';

const Header = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
    <Container style={{
       width: "25%",
       paddingTop: "30%",
       paddingRight: "25%",
       left: "80%",
       height:"12%",
       position: "absolute",
       zIndex: 10
    }}
    >
      <Text style={{
      textAlign: "center"
    }}>
      {
        user.token && 
        <Form 
          style={{

          }}
          submitLabel={"Logout"}
        />
      }
    </Text>
    </Container>
    </>
  )
};

export default Header;