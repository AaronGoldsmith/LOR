import React from "react";
import {Icon} from "./Icon"
import "./Icon.css"
const IconList = props => (

    <div className="text-secondary d-flex
                        justify-content-between
                        m-5">
        {props.icons.map(item => (
            <div className="d-block text-light">
                    <Icon type={item.name}></Icon>
                    <h6>{item.tag}</h6>
            </div>
            )
        )}
    </div>
)

export default IconList;