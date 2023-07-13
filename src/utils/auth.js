import jwt from "jsonwebtoken";

const comparePasswords = (username, password) => {
  return username === process.env.USERNAME && password === process.env.PASSWORD;
};

const generateToken = (username) => {
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
  return token;
};

export { comparePasswords, generateToken };
