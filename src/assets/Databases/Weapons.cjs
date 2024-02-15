"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3 = require("sqlite3");

var db = new sqlite3.Database("./ActiveDBs/Weapons.db");
// Function to create a table and insert simple melee weapon data into it
function insertSimpleMeleeWeapons() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS simpleMeleeWeapons (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, numDice INTEGER, typeDice INTEGER, typeDamage TEXT, type TEXT, range TEXT)"
    );
    // Insert some data
    var stmt = db.prepare(
      "INSERT INTO simpleMeleeWeapons (name, price, numDice, typeDice, typeDamage, type, range) VALUES (?, ?, ?, ?, ?, ?, ?)"
    );
    stmt.run("Club", 1, 1, 4, "Bludgeoning", "light, '5ft'");
    stmt.run("Dagger", 2, 1, 4, "piercing", "Finesse, light, thrown", "20/60ft"
    );
    stmt.run("Greatclub", 1, 1, 8, "bludgeoning", "Two-handed", "5ft");
    stmt.run("Handaxe", 5, 1, 6, "slashing", "Light, thrown", "20/60ft");
    stmt.run("Javelin", 5, 1, 6, "piercing", "Thrown", "30/120ft");
    stmt.run("Light hammer", 2, 1, 4, "bludgeoning", "Light, thrown", "20/60ft");
    stmt.run("Mace", 5, 1, 6, "bludgeoning", "-", "5ft");
    stmt.run("Quarterstaff", 1, 1, 6, "bludgeoning", "Versatile", "5ft");
    stmt.run("Spear", 1, 1, 6, "piercing", "Thrown", "20/60ft");

    stmt.finalize();
  });
}

// Function to create a table and insert simple ranged weapon data into it
function insertSimpleRangedWeapons() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS simpleRangedWeapons (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, numDice INTEGER, typeDice INTEGER, typeDamage TEXT, type TEXT, range TEXT)"
    );
    // Insert some data
    var stmt = db.prepare(
      "INSERT INTO simpleRangedWeapons (name, price, numDice, typeDice, typeDamage, type, range) VALUES (?, ?, ?, ?, ?, ?, ?)"
    );
    stmt.run("Crossbow, light", 25, 1, 8, "Piercing", "Loading, two-handed", "5ft");
    stmt.run("Dart", 1, 1, 4, "piercing", "Finesse, thrown", "20/60ft");
    stmt.run("Shortbow", 25, 1, 6, "piercing", "Two-handed", "80/320ft");
    stmt.run("Sling", 1, 1, 4, "bludgeoning", "-", "30/120ft");
    stmt.finalize();
  });
}

// Function to create a table and insert martial melee weapon data into it
function insertMartialMeleeWeapons() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS martialMeleeWeapons (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, numDice INTEGER, typeDice INTEGER, typeDamage TEXT, type TEXT, range TEXT)"
    );
    // Insert some data
    var stmt = db.prepare(
      "INSERT INTO martialMeleeWeapons (name, price, numDice, typeDice, typeDamage, type, range) VALUES (?, ?, ?, ?, ?, ?, ?)"
    );
    stmt.run("Battleaxe", 10, 1, 8, "Slashing", "Versatile (1d10)", "5ft");
    stmt.run("Flail", 10, 1, 8, "Bludgeoning", "-", "5ft");
    stmt.run("Glaive", 20, 1, 10, "Slashing", "Heavy, reach, two-handed", "10ft");
    stmt.run("Greateaxe", 30, 1, 12, "Slashing", "Heavy, two-handed", "5ft");
    stmt.run("Greatsword", 50, 2, 6, "Slashing", "Heavy, two-handed", "5ft");
    stmt.run("Halberd", 20, 1, 10, "Slashing", "Heavy, reach, two-handed", "10ft");
    stmt.run("Lance", 10, 1, 12, "piercing", "Reach, special", "10ft");
    stmt.run("Longsword", 15, 1, 8, "Slashing", "Versatile (1d10)", "5ft");
    stmt.run("Maul", 10, 2, 6, "Bludgeoning", "Heavy, two-handed", "5ft");
    stmt.run("Morningstar", 15, 1, 8, "Piercing", "-", "5ft");
    stmt.run("Pike", 5, 1, 10, "Piercing", "Heavy, reach, two-handed", "10ft");
    stmt.run("Rapier", 25, 1, 8, "Piercing", "Finesse", "5ft");
    stmt.run("Scimitar", 25, 1, 6, "Slashing", "Finesse, light", "5ft");
    stmt.run("Shortsword", 10, 1, 6, "Piercing", "Finesse, light", "5ft");
    stmt.run("Trident", 5, 1, 6, "Piercing", "Thrown, versatile (1d8)", "20/60ft");
    stmt.run("War pick", 5, 1, 8, "Piercing", "-", "5ft");
    stmt.run("Warhammer", 15, 1, 8, "Bludgeoning", "Versatile (1d10)", "5ft");
    stmt.run("Whip", 2, 1, 4, "Slashing", "Finesse, reach", "10ft");

    stmt.finalize();
  });
}

// Function to create a table and insert martial ranged weapon data into it
function insertMartialRangedWeapons() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS martialRangedWeapons (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, numDice INTEGER, typeDice INTEGER, typeDamage TEXT, type TEXT, range TEXT)"
    );
    // Insert some data
    var stmt = db.prepare(
      "INSERT INTO martialRangedWeapons (name, price, numDice, typeDice, typeDamage, type, range) VALUES (?, ?, ?, ?, ?, ?, ?)"
    );
    stmt.run("Blowgun", 10, 1, 1, "Piercing", "Loading", "25/100ft");
    stmt.run("Crossbow, hand", 75, 1, 6, "piercing", "light, loading", "30/120ft");
    stmt.run("Crossbow, heavy", 50, 1, 10, "piercing", "Heavy, loading, wo-handed", "100/400ft");
    stmt.run("Longbow", 50, 1, 8, "Piercing", "Heavy, two-handed", "150/600ft");
    stmt.run("Net", 1, 0, 0, "None", "Special, thrown", "5/15ft");
    stmt.finalize();
  });
}
// Function to select and display data from the table
function selectSimpleMeleeWeaponsData() {
  // Select data
  db.serialize(function () {
    db.each("SELECT * FROM simpleMeleeWeapons", function (err, row) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(row);
      }
    });
  });
}

function selectSimpleRangedWeaponsData() {
  // Select data
  db.serialize(function () {
    db.each("SELECT * FROM simpleRangedWeapons", function (err, row) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(row);
      }
    });
  });
}

function selectMartialMeleeWeaponsData() {
  // Select data
  db.serialize(function () {
    db.each("SELECT * FROM martialMeleeWeapons", function (err, row) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(row);
      }
    });
  });
}

function selectMartialRangedWeaponsData() {
  // Select data
  db.serialize(function () {
    db.each("SELECT * FROM martialRangedWeapons", function (err, row) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(row);
      }
    });
  });
  db.close();
}

function findTable(TABLE_NAME) {
  const DB_PATH = "../../../ActiveDBs/Weapons.db";
     
  // Open the SQLite database
  const db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
          console.error('Error opening database:', err.message);
          return;
      }
      console.log('Database opened successfully');
  
      // Query to check if the table exists
      const query = `SELECT name FROM sqlite_master WHERE type='table' AND name=?`;
      
      // Execute the query with the table name as a parameter
      db.get(query, [TABLE_NAME], (err, row) => {
          if (err) {
              console.error('Error querying table:', err.message);
              return;
          }
          if (row) {
              // The table exists
              return 1;
          } else {
              // The table does not exist
              return 0;
          }
      });

  });
  return -1;


}

//Function to insert all data
function insertAllWeaponData() {
  const tableNames = ["simpleMeleeWeapons", "simpleRangedWeapons", "martialMeleeWeapons", "martialRangedWeapons"];
  // Insert simple melee weapon data into the table
  if (findTable(tableNames[0]) !== 1) {
    insertSimpleMeleeWeapons();
  }

  //insert simple ranged weapon data into the table
  if (findTable(tableNames[1]) !== 1) {
    insertSimpleRangedWeapons();
  }

  //insert martial melee weapon data into the table
  if (findTable(tableNames[2]) !== 1) {
    insertMartialMeleeWeapons();
  }

  //insert martial ranged weapon data into the table
  if (findTable(tableNames[3]) !== 1) {
    insertMartialRangedWeapons();
  }
}

// Select and display the inserted data
function selectAllWeaponData() {
  selectSimpleMeleeWeaponsData();
  selectSimpleRangedWeaponsData();
  selectMartialMeleeWeaponsData();
  selectMartialRangedWeaponsData();
}


insertAllWeaponData();
