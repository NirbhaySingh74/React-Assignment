export const executeCode = async (code: string, token: string) => {
    const response = await fetch("http://localhost:8000/user/admin/api/kernels", {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    return response.json();
  };