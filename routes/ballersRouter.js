
const playersRouter = require('express').Router()
const playersController = require('../controllers/ballersController');
const playersViewController = require('../controllers/ballersViewController');

const quoteDb = require('../models/players');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

function update(req, res, next) {
  req.body.athlete_id = req.params.id;
  ballers_db.updatePlayers(req.body)
 .then(data => {
   console.log(data);
   res.locals.players = data;
   next();
 })
 .catch(err => {
   next(err)
 })
}

playersRouter.route('/')
  .get(playersController.getAll, playersViewController.sendPlayers, sendError)
  .post(playersController.create, playersViewController.redirectToPlayersShow, sendError);

playersRouter.get('/new', playersViewController.sendNewPlayers);
playersRouter.get('/:id/update', playersController.getOne, playersViewController.sendUpdatePlayers);

playersRouter.route('/:id')
  .get(playersController.getOne, playersViewController.sendOnePlayers, sendError)
  .put(update, playersViewController.redirectToPlayersShow)
  .delete(playersController.destroy, playersViewController.redirectToPlayersIndex, sendError);

module.exports = playersRouter;
