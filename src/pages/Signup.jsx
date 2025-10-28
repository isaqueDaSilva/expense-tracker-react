import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { signup } from "../utils/auth";
import { setUserCredentialsOnStorage } from "../utils/storageForCredentials";
import "../index.css";

export function Signup({ onSignupSuccessed, onClickSigninButton }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const signupPhrase = isLoading ? "Loading..." : "Sign Up";

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSignup = async () => {
    setIsLoading(true);
    let response;
    try {
      response = await signup(username, email, password);
      setUserCredentialsOnStorage(response.accessToken, response.user);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }

    if (response) {
      onSignupSuccessed();
    }
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <Input placeholder="Username" onChange={onChangeUsername} />
      <Input placeholder="Email" onChange={onChangeEmail} />
      <Input
        placeholder="Password"
        type="password"
        onChange={onChangePassword}
      />
      <Button
        children={signupPhrase}
        onClick={onSignup}
        isButtonDisabled={isLoading}
      ></Button>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button onClick={onClickSigninButton} className="text-blue-500">
          Sign in
        </button>
      </p>
    </Card>
  );
}
