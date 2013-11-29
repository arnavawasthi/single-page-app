(function() {

    /**
 * PhotoCollection: A collection of Photo items used in index, subalbum and photo views
 * @type Backbone.Collection
 */
    var PhotoCollection = Backbone.Collection.extend({
        model: SinglePageApp.Models.Photo,
        comparator: function(item) {
            return item.get('pid');
        }
    });

    $.ns("SinglePageApp.Collections.PhotoCollection", PhotoCollection);

})();