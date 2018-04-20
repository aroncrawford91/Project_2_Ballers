function sendNike(req,res) {
  res.render('quotes/index',{
    nike: res.locals.nike
  });
}

function sendOneNike(req,res) {
  res.render('quotes/quote', {
    nike: res.locals.nike
  });
}

function sendCreateNike(req,res){
  res.json({
    status: 'ok',
    nike: res.locals,newNike
  });
}

function redirectToNikeShow(req, res) {
  console.log('redirecting to /nike/' + res.locals.nike.athlete_id);
  res.redirect(`/nike/${res.locals.nike.athlete_id}`)
}

function redirectToNikeIndex(req, res) {
  console.log('redirecting to /nike');
  res.redirect('/nike')
}

function sendNewNike(req, res) {
  res.render('nike/newNike');
}

function sendUpdateNike(req, res) {
  res.render('nike/updateNike', {
    nike: res.locals.nike
  });
}

module.exports ={
  sendNike: sendNike,
  sendOneNike: sendOneNike,
  sendCreateNike: sendCreateNike,
  sendNewNike:sendNewNike,
  sendUpdateNike: sendUpdateNike,
  redirectToNikeShow: redirectToNikeShow,
  redirectToNikeIndex: redirectToNikeIndex
};

