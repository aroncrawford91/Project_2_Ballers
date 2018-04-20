const db = require('../config/connection');

function getAllPlayers() {
  const queryPromise = db.any(`
    SELECT * FROM players
    `
  );
  return queryPromise;
}

function getOnePlayers(id) {
  const queryPromise = db.one(`
    SELECT * FROM players
    WHERE athlete_id = $1
    `, id
  );
  return queryPromise;
}


function createPlayers(player) {
  const queryPromise = db.one(`
    INSERT INTO players (name,brand,shoe,price,shoepic,playerpic)
    VALUES ($/name/, $/brand/,$/shoe/,$/price/,$/shoepic/,$/playerpic/)
    RETURNING *
    `, players
  );
  return queryPromise;
}


function updatePlayers(player) {
  const queryPromise = db.one(`
    UPDATE players
    SET shoe = $/shoe/, price = $/price/, shoepic = $/shoepic/
    WHERE athlete_id = $/athlete_id/
    RETURNING *
    `, players
  );
  return queryPromise;
}


function destroyPlayers(id) {
  const queryPromise = db.none(`
    DELETE FROM players WHERE athlete_id = $1
    `, id
  );
  return queryPromise
}

module.exports = {
  getAllPlayers,
  getOnePlayers,
  createPlayers,
  updatePlayers,
  destroyPlayers,
}
