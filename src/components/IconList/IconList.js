import React from "react";
import {Icon} from "./Icon"

const IconList = props => (
  <div className="text-secondary d-flex
                    justify-content-between
                    m-5">
      {props.icons.map(item => (
          <Icon onClick={this} type={item} ></Icon>
      ))}
  </div>
);

export default IconList;