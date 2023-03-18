import React, { useState } from "react";

import {
  signInWithGoogle,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";


import FormInput from "../Form-Input/FormInput.component";
import "./sign-in-form.styles.scss";
import Button,  {BUTTON_TYPE_CLASSES} from "../Button/Button.component";

const SignInForm = () => {

  const withgoogle = async () => {
    await signInWithGoogle();
  };

  const defaultFormField = {
    email: "",
    password: "",
  };


  const reseteFields = () => {
    setFormField(defaultFormField);
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      reseteFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password For Email");
          reseteFields();
          break;
        case "auth/user-not-found":
          alert("No User Exist With Email");
          reseteFields();
          break;
        case "auth/invalid-email":
          alert("Invalide Email");
          reseteFields();
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          onChange={handelChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          onChange={handelChange}
          name="password"
          value={password}
          required
        />

        <div className="buttons-container">
          <Button type={"button"} buttonTypes={BUTTON_TYPE_CLASSES.google} onClick={withgoogle}>
            Google SignIn
          </Button>
          <Button type="submit" onClick={handelSubmit}>
            SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
