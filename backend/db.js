// backend/db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import mysql from "mysql2/promise";

const DB_ENGINE = process.env.DB_ENGINE || "sqlite";

let rawDb;

// Petite couche qui fournit toujours .all et .run
let db = {
    all: async (sql, params = []) => {
        throw new Error("DB non initialisée");
    },
    run: async (sql, params = []) => {
        throw new Error("DB non initialisée");
    },
};

if (DB_ENGINE === "sqlite") {
    rawDb = await open({
        filename: "projects.db",
        driver: sqlite3.Database,
    });

    db.all = (sql, params = []) => rawDb.all(sql, params);
    db.run = (sql, params = []) => rawDb.run(sql, params);

} else if (DB_ENGINE === "mysql") {
    rawDb = await mysql.createPool({
        host: "lassaix504.mysql.db",
        user: "lassaix504",
        password: "2ES1770914i1x3xCnk00D4x5rXL",
        database: "lassaix504",
        waitForConnections: true,
        connectionLimit: 10,
    });

    db.all = async (sql, params = []) => {
        const [rows] = await rawDb.query(sql, params);
        return rows;
    };

    db.run = async (sql, params = []) => {
        const [result] = await rawDb.query(sql, params);
        return { lastID: result.insertId, changes: result.affectedRows };
    };
} else {
    throw new Error(`DB_ENGINE "${DB_ENGINE}" non supporté`);
}

export default db;
