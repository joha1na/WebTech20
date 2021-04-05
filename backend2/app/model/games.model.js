const sql = require("./db.js");

// constructor
const Game = function(game) {
    this.gamename = game.gamename;
    this.platform = game.platform;
    this.status = game.status;
    this.rating = game.rating;
};

Game.create = (newGame, result) => {
    sql.query("INSERT INTO games SET ?", newGame, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created game: ", { id: res.insertId, ...newGame });
        result(null, { id: res.insertId, ...newGame });
    });
};

Game.findById = (gameId, result) => {
    sql.query(`SELECT * FROM games WHERE id = ${gameId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found game: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Game with the id
        result({ kind: "not_found" }, null);
    });
};

Game.getAll = result => {
    sql.query("SELECT * FROM games", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("games: ", res);
        result(null, res);
    });
};

Game.updateById = (id, game, result) => {
    sql.query(
        "UPDATE games SET gamename = ?, platform = ?, status = ?, rating = ? WHERE id = ?",
        [game.gamename, game.platform, game.status, game.rating, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Game with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated game: ", { id: id, ...game });
            result(null, { id: id, ...game });
        }
    );
};

Game.remove = (id, result) => {
    sql.query("DELETE FROM games WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Game with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted game with id: ", id);
        result(null, res);
    });
};

Game.removeAll = result => {
    sql.query("DELETE FROM games", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} games`);
        result(null, res);
    });
};

module.exports = Game;
