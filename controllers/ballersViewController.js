function sendPlayers(req,res) {
  res.render('players/index',{
    players: res.locals.players
  });
}

function sendOnePlayers(req,res) {
  res.render('partials/single_player', {
    player: res.locals.player
  });
}

function sendCreatePlayers(req,res){
  res.json({
    status: 'ok',
    players: res.locals,newPlayers
  });
}

function redirectToPlayersShow(req, res) {
  console.log('redirecting to /players/' + res.locals.players.athlete_id);
  res.redirect(`/players/${res.locals.players.athlete_id}`)
}

function redirectToPlayersIndex(req, res) {
  console.log('redirecting to /players');
  res.redirect('/players')
}

function sendNewPlayers(req, res) {
  res.render('players/newPlayers');
}

function sendUpdatePlayers(req, res) {
  res.render('players/updatePlayers', {
    players: res.locals.players
  });
}

module.exports ={
  sendPlayers: sendPlayers,
  sendOnePlayers: sendOnePlayers,
  sendCreatePlayers: sendCreatePlayers,
  sendNewPlayers:sendNewPlayers,
  sendUpdatePlayers: sendUpdatePlayers,
  redirectToPlayersShow: redirectToPlayersShow,
  redirectToPlayersIndex: redirectToPlayersIndex
};

