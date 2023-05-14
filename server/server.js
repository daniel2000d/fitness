const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Setăm portul pe care va rula server-ul nostru
const port = process.env.PORT || 3000;

// Creăm conexiunea la baza de date MariaDB
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "daniel",
  database: "mybase",
});

// Verificăm dacă s-a realizat conexiunea la baza de date
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ", err);
    return;
  }
  console.log("Connected to database!");
});

// Folosim bodyParser pentru a putea citi datele din request-ul primit
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Creăm o rută pentru a insera cardurile în tabelul 'cards'
app.post("/insert-cards", (req, res) => {
  const { cards } = req.body;

  // Folosim o buclă for pentru a insera fiecare card în baza de date
  for (let i = 0; i < cards.length; i++) {
    const { id, title, description, price } = cards[i];
    // Definim query-ul de inserare
    const query = `INSERT INTO cards (id, title, description, price) VALUES ('${id}', '${title}', '${description}', '${price}')`;
    // Executăm query-ul
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error inserting card: ", err);
        return;
      }
      console.log("Inserted card with id ", id);
    });
  }
  res.send("Inserted cards into database!");
});

// Pornim server-ul
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
