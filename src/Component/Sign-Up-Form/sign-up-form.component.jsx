import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../Form-Input/FormInput.component";
import "./sign-up-form.styles.scss";
import Button from "../Button/Button.component";

const SignUpForm = () => {
  
  const defaultFormField = {
    UserName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { UserName, email, password, confirmPassword } = formField;

  const reseteFields = () => {
    setFormField(defaultFormField);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password it dosn't matched");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      reseteFields();
      await createUserDocFromAuth(user, { UserName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create this user, email already used");
      }
      console.log("user created encountred an error", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>You haven't an account ?</h2>
      <span>SignUp With Your Email And Password </span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label={"User Name"}
          type="text"
          onChange={handelChange}
          name="UserName"
          value={UserName}
          required
        />
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
        <FormInput
          label={"Confirme Password"}
          type="password"
          onChange={handelChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
