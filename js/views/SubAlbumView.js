/**
 * SubalbumView: The view reached when clicking on a level-one album or browsing to a subalbum bookmark. 
 * This contains the images found in the 'subalbum' section of an album entry. Clicking on any of the 
 * images shown in a subalbum takes you to the PhotoView of that specific image
 * @type Backbone.View
 */

(function(){
    var SubalbumView = Backbone.View.extend({
        el: $('#main'),
        utils: new SinglePageApp.Utils(),
//        indexTemplate: $("#subindexTmpl").template(),
    
        initialize: function(options){

        },

        render: function() {
            var sg = this;
            removeFallbacks();
            
            sg.utils.getTemplate("js/views/templates/SubIndexTmpl.jqt", "#subindexTmpl", 
                function(){
                    sg.el.fadeOut('fast', function() {
                        sg.el.empty();
                        $.tmpl($("#subindexTmpl"), sg.model.toArray()).appendTo(sg.el);
                        sg.el.fadeIn('fast');
                    });
                    return this;
                });            
        }

    });
    
    $.ns("SinglePageApp.Views.SubalbumView", SubalbumView)
})()
