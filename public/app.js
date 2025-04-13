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
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful login (e.g., redirect to dashboard)
            localStorage.setItem('token', data.token); // Store token in local storage
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            // Handle login error
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
      await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });
      localStorage.removeItem('token'); // Remove token from local storage
      window.location.href = 'login.html'; // Redirect to login page
  } catch (error) {
      console.error('Error during logout:', error);
  }
});