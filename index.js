import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check password
function passwordcheck(req, res, next) {
  const password = req.body.password;
  if (password === "login@123") {
    // Password is correct
    next(); // Allow access to the secret page
  } else {
    // Password is wrong
    res.sendFile(join(__dirname, "public", "index.html")); // Re-show login
  }
}

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

// Use middleware on POST only
app.post('/check', passwordcheck, (req, res) => {
  res.sendFile(join(__dirname, "public", "secret.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
