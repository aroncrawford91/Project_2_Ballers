const ballersDb = require('../models/players');

function getAll(req,res,next){
  console.log('query the DB');
  ballerDb.getAllPlayers()
  .then(data =>{
    console.log('Queried the DB and got' + data.length + 'results');
    res.locals.players = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getOne(req, res, next) {
  console.log(req.params);
  quoteDb.getOnePlayers(req.params.id)
  .then(data => {
    console.log(data);
    res.locals.quote = data;
    next();
  }).catch(err => {
    next(err);
  });
}

function create(req, res, next) {
  console.log(req.body);
  quoteDb.createPlayers(req.body)
  .then(data => {
    console.log(data);
    res.locals.quote = data;
    next();
  }).catch(err => next(err));
}

function destroy(req, res, next) {
  console.log('Going to delete');
  quoteDb.destroyPlayers(req.params.id)
  .then(() => {
    next()
  })
  .catch(err => {
    next(err)
  })
}

module.exports = {
  getAll: getAll,
  getOne: getOne,
  create: create,
  destroy: destroy
};
