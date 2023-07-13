import { comparePasswords, generateToken } from "../../utils/auth";

export default function handler(req, res) {
  const { username, password } = req.body;

  // Validate username and password
  const isValid = comparePasswords(username, password);

  if (isValid) {
    // Generate token or session for authenticated user
    const token = generateToken(username);

    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
}
