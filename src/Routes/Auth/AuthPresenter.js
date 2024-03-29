import React from "react";
import styled from  "styled-components";
import Input from "../../Components/Input"
import Button from "../../Components/Button"

const Wrapper = styled.div`
  min-height:80vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width:100%;
  max-width:350px;
`;

const StateChanger = styled(Box)`
  text-align:center;
  padding:20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
  width:350px;
`
const Form = styled(Box)`
  padding:40px;
  padding-bottom: 30px;
  maring-bottom:15px;
  form {
    width:100%;
    input{
      width:100%;
      &:not(:last-child){
        margin-bottom:7px;
      }
    }
    button {
      margin-top:15px;
    }
  }
`;

export default ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret
}) => (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <form onSubmit={onSubmit}>
            <Input placeholder = {"Email"} {...email} type="email"/>
            <Button text={"Log in"} />
          </form> 
        )} 
        {action === "signUp" && (
          <form onSubmit={onSubmit}>
            <Input placeholder = {"First name"} {...firstName}/>
            <Input placeholder = {"Last name"} {...lastName}/>
            <Input placeholder = {"Email"} {...email} type="email"/>
            <Input placeholder = {"Username"} {...username}/>
            <Button text={"Sign up"} />
          </form>
          )}
          {action === "confirm" && 
          <form onSubmit={onSubmit}>
            <Input placeholder="secret을 붙여넣기 해주세요." required {...secret}/>
            <Button text={"Confirm"} />
          </form>}
      </Form>
      
        {action !== "confirm" && (
          <StateChanger>
            {action === "logIn" ? (
            <>
            계정이 없으신가요?<Link onClick=
            {() => setAction("signUp")}>Sign up</Link>
            </>
            ) : (
            <>계정이 생성되었나요?<Link onClick=
            {() => setAction("logIn")}>Log in</Link></>)}
          </StateChanger>  
        )}
        
      
    </Wrapper>
  );