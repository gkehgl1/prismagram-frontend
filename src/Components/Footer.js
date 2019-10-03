import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight:600;
  font-size:12px;
  margin:50px 0px;
`;

const List = styled.ul`
  display:flex;
`;

const ListItem = styled.li`
  &:not(:last-child){
    margin-right: 10px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color:${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">ABOUT US</Link>
      </ListItem>
      <ListItem>
        <Link href="#">SUPPORT</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PRESS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">JOBS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PRIVACY</Link>
      </ListItem>
      <ListItem>
        <Link href="#">TERMS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">DIRETORY</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PROFILES</Link>
      </ListItem>
      <ListItem>
        <Link href="#">HASHTAGS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">LANGUAGE</Link>
      </ListItem>
    </List>
    <Copyright>
      InstaClone {new Date().getFullYear()} &copy;
    </Copyright>
  </Footer>
);



