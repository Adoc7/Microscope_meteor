Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },




// Template.postItem.helpers({
    domain: function() {
        var b = document.createElement('a');
        b.href = this.url;
        return b.hostname;
    }
});


