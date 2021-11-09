import React from "react";
import { Link } from "react-router-dom";
import errorpage from "./7iJb.gif";
import "./Error.css";
import styled from 'styled-components'

const NotFound = () => (
  <div>
    <H1 className="Title">404 - Not Found!</H1>
    <DIV>
      <img
        className="ErrorPage"
        src={errorpage}
        aria-label="errorpage"
        alt="errorpage"
      />
    </DIV>
    
    <br />
    <DIV >
      <Link to="/">Retour à l'application</Link>
    </DIV>
  </div>
);

export default NotFound;

const H1 = styled.h1`
  text-align: center;
  font-size: 55px;
  margin: 70px 0 0px;
`;

const DIV = styled.div`
margin-left: auto;
margin-right: auto;
width: 30em
`;


