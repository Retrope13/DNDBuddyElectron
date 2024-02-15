"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3 = require("sqlite3");

var db = new sqlite3.Database("./ActiveDBs/Armor.db");

//^ Insert functions
function insertLightArmor() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS lightArmor (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
    );
    
    const lightArmors = [
        ["Padded", 5, "11 + Dex modifier", "-", "Disadvantage", "Light"],
        ["Leather", 10, "11 + Dex modifier", "-", "-", "Light"],
        ["Studded Leather", 45, "12 + Dex Modifier", "-", "-", "Light"]
    ];
    const insertStmt = db.prepare('INSERT INTO lightArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)');
    lightArmors.forEach(armor => {
      insertStmt.run(armor);
    });
    insertStmt.finalize();
  });
}


function insertMediumArmor() {
  // Create table
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS mediumArmor (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
    );
    
    const mediumArmors = [
        ["Hide", 10, "12 + Dex modifier (max 2)", "-", "-", "Medium"],
        ["Chain Shirt", 50, "13 + Dex modifier (max 2)", "-", "-", "Medium"],
        ["Scale Mail", 50, "14 + Dex modifier (max 2)", "-", "Disadvantage", "Medium"],
        ["Spiked Armor", 75,  "14 + Dex modifier (max 2)", "-", "Disadvantage", "Medium"],
        ["Breastplate", 400, "14 + Dex modifier (max 2)", "-", "-", "Medium"],
        ["Halfplate", 750, "15 + Dex modifier (max 2)", "-", "Disadvantage", "Medium"]
    ];
    
    const insertStmt = db.prepare('INSERT INTO mediumArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)');
    mediumArmors.forEach(armor => {
      insertStmt.run(armor);
    });
    insertStmt.finalize();
  });
  }

function insertHeavyArmor() {
// Create table
db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS heavyArmor (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
    );
    
    const heavyArmors = [
        ["Ring Mail", 30, "14", "-", "Disadvantage", "Heavy"],
        ["Chain Mail", 75, "16", "Str 13", "Disadvantage", "Heavy"],
        ["Splint", 200, "17", "Str 15", "Disadvantage", "Heavy"],
        ["Plate", 15000, "18", "Str 15", "Disadvantage", "Heavy"]
    ];
    
    
    const insertStmt = db.prepare('INSERT INTO heavyArmor (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)');
    heavyArmors.forEach(armor => {
      insertStmt.run(armor);
    });
    insertStmt.finalize();
  });
}

function insertShield() {
// Create table
    db.serialize(function () {
        db.run(
        "CREATE TABLE IF NOT EXISTS shields (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, armorclass TEXT, strength TEXT, stealth TEXT, type TEXT)"
        );
        
        const shields = [
            ["Shield", 10, 	"+2" ,	"-", "-", "Shield" ]
        ]
        
        const insertStmt = db.prepare('INSERT INTO shields (name, price, armorclass, strength, stealth, type) VALUES (?, ?, ?, ?, ?, ?)');
        shields.forEach(shield => {
        insertStmt.run(shield);
        });
        insertStmt.finalize();
    });
}



//! Select functions
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


//!!Find table function... really important
function findTable(TABLE_NAME) {
    const DB_PATH = "../../../ActiveDBs/Armor.db";
       
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



//&AllArmor functions if the table exists don't reinsert the data, if it doesn't exist make it
function insertAllArmor() {
    if (findTable("lightArmor") !== 1) {
        insertLightArmor();
    }

    if (findTable("mediumArmor") !== 1) {
        insertMediumArmor();
    }

    if (findTable("heavyArmor") !== 1) {
        insertHeavyArmor();
    }

    if (findTable("shields") !== 1) {
        insertShield();
    }
}



function selectAllArmor() {
    if (findTable("lightArmor")){
        selectLightArmor();
    }
    if (findTable("mediumArmor")) {
        selectMediumArmor();
    }
    if (findTable("heavyArmor")) {
        selectHeavyArmor();
    }
    if (findTable("shields")) {
        selectShield();
    }
}

insertAllArmor();





// Path to your SQLite database file

