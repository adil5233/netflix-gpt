export const checkValidData = (name, email, password) => {
  // Checks if the name contains only letters and spaces, and doesn't start or end with a space.
  // Example valid names: "John", "John Doe", "Alice Smith"
  const isNameValid = /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(name);

  // Email validation regex (simple version)
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password validation regex: min 8 chars, at least one letter and one number
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
