(function() {

    /**
  *Here we create the model 'Photo' ; used to define individual image items. 'subalbum' returns a 
  *reference to the current subalbum being viewed via the gallery for use when accessing a Photo item 
  *through a hash URL We also define a new CacheProvider for use in our Controller later.
 * @type Backbone.Model
 */
    var Photo = Backbone.Model.extend({
        subalbum: function() {
            return 'c' + gallery._currentsub;
        }
    });


    $.ns("SinglePageApp.Models.Photo", Photo);

})();