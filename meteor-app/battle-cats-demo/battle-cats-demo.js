CatStats = new Mongo.Collection('catstats');
ActivePlayers = new Mongo.Collection('activeplayers');
CatWins = new Mongo.Collection('catwins');

if (Meteor.isClient) {

  var cat1, cat2;  
  var selectedCat = false;
  
  Template.catImages.events({
    'click .catChoice': function(e,t) {

      if(selectedCat) {
        return
      } else {
        selectedCat = true;
      }

      var elem = e.currentTarget;
      var winningCat = $(elem).data('cat');

      CatStats.insert({
        catName: winningCat, 
        ddpSessionId: Meteor.connection._lastSession,
        sessionId: Session.get('sessionId'),
        battleNumber: Session.get('battleNumber')
      });

      var catWinsDoc = CatWins.findOne({catName: winningCat});

      if(!catWinsDoc) {
        CatWins.insert({catName: winningCat, numberWins: 1});
      } else if (catWinsDoc) {
        CatWins.update({_id: catWinsDoc._id}, {$inc: {numberWins: 1}});
      }

      var id = $(elem).attr('id');
      var winningCatNum;
      if(id === 'cat1') {
        winningCatNum = 1
      } else if(id === 'cat2') {
        winningCatNum = 2
      }

      $('#results').text('Cat ' + winningCatNum + ' Wins! Loading Next Battle ...');

      setTimeout(function() {
        $('#results').text('');
        selectedCat = false;

        cat1 = null;
        cat2 = null;

        Session.set('battleNumber', Session.get('battleNumber')+1);
      }, 1000)
      
    }
  });

  Template.catImages.helpers({
    'cats': function() {

      var currentBattle = Session.get('battleNumber');

      if(!cat1)
        cat1 = chooseRandomNumber(0,13);
      
      if(!cat2)
        cat2 = chooseRandomNumber(0,13, cat1);

      return {cat1: cat1, cat2: cat2};
    },
    'battleNumber': function() {
      return Session.get('battleNumber');
    }
  });

  Template.catBattleResults.helpers({
    'battleResults': function() {
      return CatWins.find({}, {sort: {numberWins: -1}});
    }
  });

  Template.numberOfPlayers.helpers({
    'activePlayers': function() {
      return ActivePlayers.find({status: 'active', provider: 'client', sessionId: {$exists: true}});
    },
    'playerVotes': function(sessionId) {
      
      if(!sessionId) {
        return;
      }
      return CatStats.find({sessionId: sessionId}).count();
    }
  })

  Meteor.startup(function() {
    var sessionId = Random.id();
    Session.set('sessionId', sessionId);
    Session.set('battleNumber', 1);

    ActivePlayers.insert({status: 'active', provider: 'client', sessionId: sessionId});
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    ActivePlayers.remove({});
  });

  Meteor.onConnection(function(connection) {
    console.log(connection);

    var userAgent = connection.httpHeaders['user-agent'];

    ActivePlayers.insert({
      connectionId: connection.id, 
      status: 'active',
      userAgent: userAgent,
      browser: getBrowser(userAgent),
      provider: 'server'
    });

    connection.onClose(function() {
      ActivePlayers.update({connectionId: connection.id}, {status: 'disconnected'});
    });
  });
}

function chooseRandomNumber(min, max, notEqualTo) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if(!notEqualTo) {
    return randomNumber;
  }

  if(randomNumber != notEqualTo) {
    return randomNumber;
  } else {
    return chooseRandomNumber(min,max, notEqualTo);
  }
}

function getBrowser(sUsrAg) {
  if(sUsrAg.indexOf("Android") > -1) {
    sBrowser = "Android OS"
  } else if (sUsrAg.indexOf('iPad')) {
    sBrowser = "iPad";
  } else if (sUsrAg.indexOf('iPhone')) {
    sBrowser = 'iPhone';
  } else if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
  } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
  } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
  } else if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
  } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "Microsoft Internet Explorer";
  }

  return sBrowser;
}
