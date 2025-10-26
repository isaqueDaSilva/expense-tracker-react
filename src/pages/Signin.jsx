import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { signin } from "../utils/auth";
import { useState } from "react";
import { ProfileStorage } from "../utils/profileStorage";
import "../index.css";

export function Signin({ onSigninSuccessed, onClickSignupButton }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const signinPhrase = isLoading ? "Loading..." : "Sign In";

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const onSignin = async () => {
    setIsLoading(true);

    try {
        const response = await signin(email, password);
        localStorage.setItem("accessToken", response.accessToken);
        ProfileStorage.getSharedInstance().setProfile(response.user);
    } catch(error) {
        alert(error);
    } finally {
        setIsLoading(false);
        onSigninSuccessed();
    }
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <Input placeholder="Email" onChange={onChangeEmail} />
      <Input
        placeholder="Password"
        type="password"
        onChange={onChangePassword}
      />
      <Button children={signinPhrase} onClick={onSignin} isButtonDisabled={isLoading}></Button>
      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button onClick={onClickSignupButton} className="text-blue-500" disabled={isLoading}>
          Create one
        </button>
      </p>
    </Card>
  );
}
