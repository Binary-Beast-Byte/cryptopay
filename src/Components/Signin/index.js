import React from "react";
import {
  FormContent,
  FormInput,
  FormLabel,
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormButton,
  Text,
  FormMessage
} from "./SigninElement";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">₿coin</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Contact us</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="message">Enter your Message</FormLabel>
              <FormMessage type="form-control" rows="5" required />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
