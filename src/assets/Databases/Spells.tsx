import sqlite3 from 'sqlite3';

// Open SQLite database
const db = new sqlite3.Database('Spells.db');

// Execute SQL queries
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS data (key TEXT, value TEXT)');
  db.run('INSERT INTO data (key, value) VALUES (?, ?)', ['key', 'value']);
  db.all('SELECT * FROM data', (err, rows) => {
    console.log(rows);
  });
});

// Close database connection
db.close();