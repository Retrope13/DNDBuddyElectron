"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3 = require("sqlite3");

var db = new sqlite3.Database("Armor.db");
// Function to create a table and insert light armor data into it
function insertLightArmor() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS lightArmor (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
    );
    // Insert some data
    var stmt = db.prepare(
      "INSERT INTO lightArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)"
    );
    stmt.run("Padded", 5, "11 + Dex modifier", "-", "Disadvantage", "Light");
    stmt.run("Leather", 10, "11 + Dex modifier", "-", "-", "Light"
    );
    stmt.run("Studded leather", 45, "12 + Dex modifier", "-", "-", "Light");

    stmt.finalize();
  });
}


// Function to create a table and insert simple melee weapon data into it
function insertMediumArmor() {
    // Create table
    db.serialize(function () {
      db.run(
        "CREATE TABLE IF NOT EXISTS mediumArmor (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
      );
      // Insert some data
      var stmt = db.prepare(
        "INSERT INTO lightArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)"
      );
      stmt.run("Hide", 10, "12 + Dex modifier (max 2)", "-", "Disadvantage", "Medium");
      stmt.run("Chain shirt", 50, "13 + Dex modifier (max 2)", "-", "-", "Medium"
      );
      stmt.run("Scale mail", 50, "14 + Dex modifier (max 2)", "-", "Disadvantage", "Medium");
      stmt.run("Breastplate", 400, "14 + Dex modifier (max 2)", "-", "-", "Medium");
      stmt.run("Half plate", 750, "15 + Dex modifier (max 2)", "-", "Disadvantage", "Medium");
      stmt.finalize();
    });
  }

  function insertHeavyArmor() {
    // Create table
    db.serialize(function () {
      db.run(
        "CREATE TABLE IF NOT EXISTS heavyArmor (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
      );
      // Insert some data
      var stmt = db.prepare(
        "INSERT INTO lightArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)"
      );
      stmt.run("Ring mail", 30, "14", "-", "Disadvantage", "Heavy");
      stmt.run("Chain mail", 75, "16", "Str 13", "Disadvantage", "Heavy"
      );
      stmt.run("Splint", 200, "17", "Str 15", "Disadvantage", "Heavy");
      stmt.run("Plate", 1500, "18", "Str 15", "Disadvantage", "Heavy");
      stmt.finalize();
    });
  }

  function insertShield() {
    // Create table
    db.serialize(function () {
      db.run(
        "CREATE TABLE IF NOT EXISTS shield (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
      );
      // Insert some data
      var stmt = db.prepare(
        "INSERT INTO lightArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)"
      );
      stmt.run("Shield", 10, "+2", "-", "-", "Shield");
      stmt.finalize();
    });
  }


function selectLightArmor() {
    // Select data
    db.serialize(function () {
        db.each("SELECT * FROM lightArmor", function (err, row) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row);
        }
        });
    });
}

function selectMediumArmor() {
    // Select data
    db.serialize(function () {
        db.each("SELECT * FROM mediumArmor", function (err, row) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row);
        }
        });
    });
}

function selectHeavyArmor() {
    // Select data
    db.serialize(function () {
        db.each("SELECT * FROM heavyArmor", function (err, row) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row);
        }
        });
    });
}

function selectShield() {
    db.serialize(function () {
        db.each("SELECT * FROM shield", function (err, row) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row);
        }
        });
    });
    db.close();
}

function insertAllArmor() {
    insertLightArmor();
    insertMediumArmor();
    insertHeavyArmor();
    insertShield();
}

function selectAllArmor() {
    selectLightArmor();
    selectMediumArmor();
    selectHeavyArmor();
    selectShield();
}

insertAllArmor();
selectAllArmor();

