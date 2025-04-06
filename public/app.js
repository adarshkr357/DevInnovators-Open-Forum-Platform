document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new URLSearchParams();
    formData.append("name", document.getElementById("username").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("password", document.getElementById("password").value);
  
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
  
      const message = await response.text();
      document.getElementById("message").textContent = message;
    } catch (error) {
      document.getElementById("message").textContent = "Something went wrong!";
      console.error(error);
    }
  });
  