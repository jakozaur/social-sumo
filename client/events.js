var handleSumoEvent = function(e, data) {
  console.log('Sumo event');
  console.log(e);
  console.log(data);
  Events.insert({
    type: data.action,
    action: data.parameter,
    createdAt: Date.now()
  });
  Session.set('counter', Session.get('counter') + 1);
};

Template.hello.onCreated(function() {
  $('body').on('sumo', handleSumoEvent);
});

Template.hello.onDestroyed(function() {
  $('body').off('sumo', handleSumoEvent);
});
