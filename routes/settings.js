// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀';
  });
  
  // Toggle password visibility
  function toggleVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
    const icon = iconElement.querySelector('span');
  
    if (input.type === 'password') {
      input.type = 'text';
      icon.textContent = 'visibility';
    } else {
      input.type = 'password';
      icon.textContent = 'visibility_off';
    }
  }
  
  // Switch between sections
  function showSection(sectionId) {
    const sections = ['profile-section', 'email-section', 'password-section', 'account-section'];
    sections.forEach(id => {
      document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
  
    // Change active sidebar link
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector(`.sidebar a[href='#${sectionId}']`).classList.add('active');
  }
  
  // Handle Profile Form Submission
  document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const username = document.getElementById('username').value.trim();
  
    if (!fullName || !username) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Profile updated successfully!');
  });
  
  // Handle Email Form Submission
  document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
  
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Email updated successfully!');
  });
  
  // Handle Password Form Submission
  document.getElementById('password-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const current = document.getElementById('currentPassword').value.trim();
    const newPass = document.getElementById('newPassword').value.trim();
    const confirm = document.getElementById('confirmPassword').value.trim();
  
    if (!current || !newPass || !confirm) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (newPass !== confirm) {
      alert('New and Confirm passwords do not match!');
      return;
    }
  
    alert('Password updated successfully!');
  });
  
  // Handle Account Deletion
  document.querySelector('.btn-danger').addEventListener('click', () => {
    alert('Account deletion is a critical action. Are you sure you want to proceed?');
  });
  
  // Show Profile Section by default
  showSection('profile-section');
   