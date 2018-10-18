import React from "react";
import "./LoginCard.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import IconList from "../IconList"
import { NameInput } from "./NameInput";


const LoginCard = props => (
  <div className="card bg-light" {...props}>
    <div className="card-body border-light">
      <h2 className="text-dark mb-4">Login</h2>
      <NameInput />
      <Input type="email" placeholder="Email"/>
      <IconList icons={["briefcase","building","book-open"]}/>
      <FormBtn>Submit</FormBtn>
    </div>
   </div>
);

export default LoginCard;
