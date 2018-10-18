import React from "react";
import "./LoginCard.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import IconList from "../IconList"
import { NameInput } from "./NameInput";


const LoginCard = props => {
  return(
    <div className="card bg-transparent" {...props}>
      <div className="card-body border-light">
        <h2 className="text-light my-5">Hey there! <br /> What brings you here today</h2>
        {/* <NameInput /> */}
        {/* <Input type="email" placeholder="Email"/> */}
        {/* <FormBtn>Submit</FormBtn> */}

        <IconList icons={[
          {name:"briefcase",tag:"professional"},
          {name:"building",tag:"home/rental"},
          {name:"book-open",tag:"educational"}]}/>
      </div>
    </div>
  )
}
export default LoginCard;
