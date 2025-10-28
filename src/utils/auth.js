import { baseURL } from "./baseURL";
import { getAccessTokenFromLocalStorage } from "./storageForCredentials";

const url = `${baseURL}/auth`;

export async function signin(email, password) {
  try {
    const encodedData = btoa(`${email}:${password}`);
    const authHeader = `Basic ${encodedData}`;
    const request = new Request(`${url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader
      },
      credentials: "include",
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error("Signin response is not valid.");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Failed to signin from the system.");
  }
};

export async function signup(username, email, password) {
  try {
    const data = {
      username: username,
      email: email,
      password: password,
    };

    const request = new Request(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: data,
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error("Signup response is not valid.");
    }

    return await response.json()
  } catch {
    throw new Error("Failed to signup from the system.");
  }
};

export async function signout() {
  try {
    const accessToken = getAccessTokenFromLocalStorage();

    if (accessToken) {
      const authHeader = `Bearer ${accessToken}`;

      const request = new Request(`${url}/signout`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": authHeader
        },
        credentials: "include"
      });

      const response = await fetch(request);

      if (!response.ok) {
        throw new Error("Failed to signout from the system.");
      }

      return true
    } else {
      throw new Error("Missing Data to signout from the system.")
    }
  } catch {
    throw new Error("Failed to signout from the system.");
  }
}
