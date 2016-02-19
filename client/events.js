var handleSumoEvent = function(e) {
    console.log('Sumo event ' + e);
    console.log(e);
    Session.set('counter', Session.get('counter') + 1);
};

Template.hello.onCreated(function() {
    $('body').on('sumo', handleSumoEvent);
});

Template.hello.onDestroyed(function() {
    $('body').off('sumo', handleSumoEvent);
});
