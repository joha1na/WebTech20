module.exports = app => {
    const games = require("../controller/games.controller.js");

    // Create a new Game
    app.post("/games", games.create);

    // GET all Games
    app.get("/games", games.findAll);

    // GET one single Game with gameId
    app.get("/games/:gameId", games.findOne);

    // Update one Game with gameId
    app.put("/games/:gameId", games.update);

    // Delete the Game with gameId
    app.delete("/games/:gameId", games.delete);

    // Delete all Games
    app.delete("/games", games.deleteAll);
};
