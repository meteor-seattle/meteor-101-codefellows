Cats = new Meteor.Collection('cats');

if (Meteor.isClient) {
  Template.battle.helpers({
    cats: function () {
      return Cats.find();
    }
  });

  Template.battle.events({
    'click img': function (e) {
      var id = $(e.currentTarget).attr('id');
      Cats.update({ _id: id }, { $inc: { votes: 1 }})
    }
  });

  Template.tally.helpers({
    results: function () {
      return Cats.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Cats.find().count() <= 0) {
      Cats.insert({
        name: 'Cat 1',
        image: '1.jpg',
        votes: 0
      });
      Cats.insert({
        name: 'Cat 2',
        image: '2.jpg',
        votes: 0
      });
    }
  });
}
