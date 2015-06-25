NotifyClient.isRegistered = false;

NotifyClient.register = function() {
  if(NotifyClient.isRegistered) {
    return;
  }

	NotifyClient.clientSessionId = Random.secret();

  Meteor.call('registerNewClient', NotifyClient.clientSessionId);

  ClientNotifications.find({clientSessionId: NotifyClient.clientSessionId}).observeChanges({
    added: function(id, doc) {
      NotifyClient.alertClient(doc.message, doc.dateSent);
    }
  });

  Meteor.subscribe('clientNotifications');

  NotifyClient.isRegistered = true;
}

NotifyClient.sendToAllOtherClients = function(message) {
  Meteor.call('notifyOtherClients', NotifyClient.clientSessionId, message, function(error, result) {

  });
};

NotifyClient.alertClient = function(message, dateSent) {
  sAlert.success(message, {
    timeout: null,
    html: true
  })
}

Meteor.startup(function() {
  NotifyClient.register();
});
