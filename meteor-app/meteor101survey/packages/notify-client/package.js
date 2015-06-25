Package.describe({
	summary: 'Send server information to the client',
  version: '0.1.0',
  name: 'meteorseattle:notifyclient'
});

Package.onUse(function(api) {
  // api.versionsFrom('1.0');

  api.use('meteor-platform');
  api.use('juliancwirko:s-alert@2.4.1');
  api.imply('juliancwirko:s-alert@2.4.1');

  api.addFiles('shared.js', ['client', 'server']);

  api.addFiles('client.js', ['client']);
  api.addFiles('server.js', ['server']);

  api.export('ClientNotifications')
  api.export('NotifyClient');

})