const express = require("express");
const router = express.Router();

// import the sqlite3 package
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./mydatabase.db");

router.get("/", (req, res) => {});

// create a usertable in the database
router.get("/create", (req, res) => {
  db.run(
    "CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT, fname TEXT, lname TEXT, dob DATE , avatar BLOB)",
    function (error) {
      if (error) {
        return res.status(500).json({ error: "Error creating the table" });
      }
      else {
        res.json({ message: "Table created successfully" });
      }
    }
  );
});

// try to authenticate a user via the login route
router.post("/login", (req, res) => {
  console.log(req.body);
  // check the database for a user with the provided username
  db.get(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    function (error, result) {
      if (error) {
        return res.status(500).json({ error: "Error querying the database" });
      }

      // if there's no user with that username, return an error
      if (!result) {
        return res
          .status(401)
          .json({ error: "Username or password is incorrect" });
      }

      // if the password is incorrect, return an error
      if (result.password !== req.body.password) {
        return res
          .status(401)
          .json({ error: "Username or password is incorrect" });
      }

      // if we get to this point, the user is authenticated
      // remove the password from the result before sending it back
      delete result.password;
      res.status(200).json(result);
    }
  );
});

router.post("/signup", (req, res) => {
  // check the database for a user with the provided username
  db.get(
    "SELECT * FROM users WHERE username = ?",
    [req.body.username],
    function (error, result) {
      if (error) {
        return res.status(500).json({ error: "Error querying the database" });
      }

      // if there's already a user with that username, return an error
      if (result) {
        return res.status(401).json({ error: "Username already exists" });
      }

      // if we get to this point, the user is authenticated
      // remove the password from the result before sending it back
      db.run(
        "INSERT INTO users (username,email , password, fname, lname, dob) VALUES (?,?, ?, ?, ?, ?)",
        [
          req.body.username,
          req.body.email,
          req.body.password,
          req.body.fname,
          req.body.lname,
          req.body.dob,
        ],
        function (error) {
          if (error) {
            console.log(error);
            return res
              .status(500)
              .json({ error: "Error inserting into the database" });
          }

          // return the new user's ID
          res.json({ id: this.lastID });
        }
      );
    }
  );
});

// retrieve all users from a database
router.get("/users", (req, res) => {
  db.all("SELECT * FROM users", function (error, results) {
    if (error) {
      return res.status(500).json({ error: "Error querying the database" });
    }

    results.forEach((user) => {
      // sanitize our data a bit - get rid of stuff that shouldn't be public
      delete user.password;
      delete user.fname;
      delete user.lname;
      

      // if there's no avatar, set a default
      if (!user.avatar) {
        user.avatar = "temp_avatar.jpg";
      }
    });
    res.json(results);
  });
});

router.get("/users/:user", (req, res) => {
  console.log(req.params.user);
  db.get(
    "SELECT * FROM users WHERE id = ?",
    [req.params.user],
    function (error, result) {
      if (error) {
        return res.status(500).json({ error: "Error querying the database" });
      }

      // remove any sensitive info from the dataset(s)
      delete result.password;
      delete result.fname;
      delete result.lname;


      // add a temp avatar if there isn't one
      if (!result.avatar) {
        result.avatar = "temp_avatar.jpg";
      }

      console.log(result);

      res.json(result);
    }
  );
});

// retrieves one user from a database based on that user's ID or another field

module.exports = router;
