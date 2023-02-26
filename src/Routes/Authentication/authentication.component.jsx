import SignUpForm from "../../Component/Sign-Up-Form/sign-up-form.component";
import SignInForm from "../../Component/Sign-In-Form/sign-in-form.component";
import './authentication.styles.scss';

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );

}