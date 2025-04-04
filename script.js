// Toggle between login and signup views
function toggleAuth(view) {
  document.getElementById('signup').style.display = view === 'signup' ? 'block' : 'none';
  document.getElementById('login').style.display = view === 'login' ? 'block' : 'none';
}

// Signup function
function signup() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  if (!username || !password) {
    alert('Please fill in both fields');
    return;
  }

  if (localStorage.getItem(username)) {
    alert('User already exists!');
    return;
  }

  localStorage.setItem(username, password);
  alert('Signup successful! Please log in.');
  toggleAuth('login');
}

// Login function
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
  } else {
    alert('Invalid username or password!');
  }
}

// Logout function
function logout() {
  document.getElementById('auth-container').style.display = 'block';
  document.getElementById('calculator').style.display = 'none';
  toggleAuth('login');
}

// Tip calculation
function calculateTip() {
  const bill = parseFloat(document.getElementById('billAmount').value);
  const tipPercent = parseFloat(document.getElementById('tipPercentage').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(bill) || isNaN(tipPercent)) {
    resultDiv.textContent = 'Please enter valid numbers.';
    return;
  }

  const tip = bill * (tipPercent / 100);
  resultDiv.textContent = `Tip Amount: ₹${tip.toFixed(2)}`;
}
