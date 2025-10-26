export async function signin(email, password) {
  try {
    const encodedData = btoa(`${email}:${password}`);
    const authHeader = `Basic ${encodedData}`;
    const request = new Request("http://127.0.0.1:3000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      credentials: "include"
    });

    const response = await fetch(request);

    if (!response.ok) {
      throw new Error("Failed to signin to the system.");
    }

    return await response.json();
  } catch (error) {
    console.log(`Failed to signin to the system. Error: ${error}`);
    throw new Error("Failed to signin to the system.");
  }
}
