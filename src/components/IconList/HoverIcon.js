import React from "react";
import {Icon as Icon} from "./Icon"
var styles = {
  box: {
    width: '5px',
    height: '5px'
  },
  in: {
    color: 'red'
  },
  out: {
    color: 'grey'
  }
};
 
class HoverIcon extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hover: 'out',
      type: props.type
    };
  }
  changeColor(){
    this.setState({
      hover: 'in'
    })
  }
  resetColor(){
    this.setState({
      hover: 'out'
    })
  }

  render(){ 
    return(
      <div
        style={{...styles[this.state.hover]}}
        onMouseEnter={this.changeColor.bind(this)} 
        onMouseLeave={this.resetColor.bind(this)}
      >
          <Icon type={this.props.type} > </Icon>
      </div>
      )}
  }
export default HoverIcon;