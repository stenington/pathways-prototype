Deps.autorun(function () {
  if (Meteor.user()) {
    Meteor.call('loadPublicBadges');
    Meteor.subscribe('user-data', Meteor.userId());
    Session.set('username', Meteor.user().username);
  }
});

Template.welcome.events({
  'click .login-button': function () {
    Meteor.loginWithPersona();
  }
});

Template.paver.created = function () {
  Session.set('editing', true);
};

Template.paver.destroyed = function () {
  Session.set('editing', false);
};

Template.paver.rendered = function() {
  $(this.find('.tray')).droppable({
    accept: '.placement',
    drop: function (evt, ui) {
      Placements.remove($(ui.draggable).data('id'));
    },
    over: function (evt, ui) {
      $(evt.target).addClass('hover');
    },
    out: function (evt, ui) {
      $(evt.target).removeClass('hover');
    }
  });
  $(this.find('.canvas')).droppable({
    accept: '.tile',
    drop: function (evt, ui) {
      if ($(ui.draggable).hasClass('unplaced')) {
        var offset = Session.get('dragOffset');
        Placements.insert({
          badge: Badges.findOne($(ui.draggable).data('id')),
          pathway: Pathways.findOne()._id,
          top: evt.pageY - offset.y,
          left: evt.pageX - offset.x
        });
      }
      evt.preventDefault();
    }
  });
};

Template.paver.helpers({
  unusedBadges: function () {
    var used = _.map(Placements.find().fetch(), function (p) { return p.badge._id; });
    console.log(Badges.find({owner: Session.get('username'), _id: {$nin: used}}).fetch());
    return Badges.find({owner: Session.get('username'), _id: {$nin: used}});
  },
  saveable: function () {
    return Placements.find().count() > 0;
  },
  showModal: function () {
    return Session.get('showModal'); 
  },
  name: function () {
    if (Pathways.findOne())
      return Pathways.findOne().name;
  }
});

Template.paver.events({
  'click .share': function (evt, template) {
    var name = $('#pathway-name').val();
    var id = Pathways.findOne()._id;
    Pathways.update(id, {$set: {name: name}});
    Meteor.Router.to('/pathway/' + id);
    Session.set('showModal', false);
  },
  'click .done': function (evt, template) {
    Session.set('showModal', true);
  },
  'click .modal-cancel': function (evt, template) {
    Session.set('showModal', false);
  },
  'click .tile': function (evt, template) {
    $(evt.currentTarget).toggleClass('hover');
  }
});

Template.pathway.helpers({
  badgePlacements: function () {
    if (Pathways.findOne())
      return Placements.find({pathway: Pathways.findOne()._id}).fetch();
  }
});

Template.badgePlacement.rendered = function () {
  if (Session.get('editing')) {
    $(this.firstNode).draggable({ 
      snap: true,
      containment: 'window',
      stop: function (evt, ui) {
        var id = $(evt.target).data('id');
        Placements.update(id, {
          $set: {
            top: ui.position.top,
            left: ui.position.left
          }
        });
      }
    }); 
  }
};

Template.badge.rendered = function () {
  $(this.firstNode).draggable({
    revert: 'invalid',
    revertDuration: 200,
    start: function (evt, ui) {
      var offset = $(evt.target).offset();
      Session.set('dragOffset', {x: evt.pageX - offset.left, y: evt.pageY - offset.top});
    }
  });
};

Template.showPathway.helpers({
  name: function () {
    return Pathways.findOne() ? Pathways.findOne().name : 'NOPE';
  }
});
