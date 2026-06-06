const form = document.getElementById('signupForm');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const trimmedName = values.name.trim();
  const email = values.email.trim();
  const password = values.password;

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  console.log('Signup payload:', {
    name: trimmedName,
    email,
    password: '[secure]'
  });

  form.reset();
  alert(`Thanks, ${trimmedName || 'there'}! Your signup request has been received.`);
});
