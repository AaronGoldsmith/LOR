import React from "react"
import {Input} from "../Form"
export const NameInput = () => (
  <div>
      <form>
      <div className="form-row">
        <div className="col">
          <Input type="text" placeholder="First name" />
        </div>
        <div className="col">
          <Input type="text" placeholder="Last name" />
        </div>
      </div>
    </form>
  </div>
);