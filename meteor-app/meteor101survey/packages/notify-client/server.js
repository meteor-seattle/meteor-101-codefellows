Meteor.methods({
	'registerNewClient': function(clientSessionId) {
    console.log(clientSessionId);

    RegisteredClients.insert({
      clientSessionId: clientSessionId,
      ddpSessionId: this.connection.id
    });
  },
  'notifyOtherClients': function(fromSessionId, message) {
    console.log('what', RegisteredClients.find().count())
    RegisteredClients.find().forEach(function(client) {
      console.log('sending message to client', message)
      // if(client === fromSessionId) {
        // return;
      // }

      ClientNotifications.insert({
        clientSessionId: client.clientSessionId,
        message: message,
        dateSent: new Date()
      });

      console.log(ClientNotifications.find().fetch());
    })
  }
});

Meteor.publish('clientNotifications',  function() {
  return ClientNotifications.find({});
})
