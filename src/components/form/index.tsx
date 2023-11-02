import React from "react";
import * as Styled from "./styled";

export const Form = () => {
  return (
    <Styled.FormContainer>
      <header>Registration</header>
      <form action="#">
        <div className="details">
          <span className="title">Personal Details</span>

          <div className="fields">
            <div className="input-field">
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>

            <div className="input-field">
              <label>Date of Birth</label>
              <input type="date" placeholder="Enter your birth date" />
            </div>

            <div className="input-field">
              <label>E-Mail</label>
              <input type="text" placeholder="Enter your e-mail" />
            </div>
          </div>
        </div>
      </form>
    </Styled.FormContainer>
  );
};
