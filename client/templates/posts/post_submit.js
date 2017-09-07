Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };


        // /////ERRORS
        // var errors = validatePost(post);
        // if (errors.title || errors.url)
        //     return Session.set('postSubmitErrors', errors);

        Meteor.call('postInsert', post, function(error, result) {
            // affiche l'erreur à l'utilisateur et s'interrompt
            if (error){
                return alert(error.reason);
                //////ERRORS
                // return throwError(error.reason);
            }
            // affiche ce résultat mais route tout de même
            if (result.postExists){
                alert('Ce lien a déjà été utilisé');
                //////ERRORS
                // throwError('Ce lien a déjà été utilisé');
            }
            Router.go('postPage', {_id: result._id});
        });
    }
});

// Template.postSubmit.onCreated(function() {
//     Session.set('postSubmitErrors', {});
// });


//////ERRORS
// Template.postSubmit.helpers({
//     errorMessage: function(field) {
//         return Session.get('postSubmitErrors')[field];
//     },
//     errorClass: function (field) {
//         return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
//     }
// });