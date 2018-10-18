import React from "react"
import "./Icon.css"
export const Icon = props => {
  return(
  <i className={`fas fa-${props.type} `} />)
}
