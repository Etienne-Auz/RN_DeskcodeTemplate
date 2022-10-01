import React, {useContext} from 'react';
import Container from '../Container/Container';
import { Text } from 'react-native';

const Footer = () => {
  return (
    <Container style={{
      width:"100%",
      height: "10%",
      top: "93%",
      position: "absolute"
    }}
    >
      <Text style={{
      textAlign: "center"
    }}>deskcode.fr - 2022</Text>
    </Container>
  )
};

export default Footer;