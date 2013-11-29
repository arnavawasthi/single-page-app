/**
 * PhotoView: The single-photo view for a single image on the third-level of the application.
 * This is reached either by clicking on an image at the second/subalbum level or 
 * browsing to a bookmarked photo in a subalbum.
 * @type Backbone.View
 */

(function(){
    
    var PhotoView = Backbone.View.extend({
        el: $('#main'),
        utils: new SinglePageApp.Utils(),
//        itemTemplate: $("#itemTmpl").template(),


        initialize: function(options) {
            this.album = options.album;
       
        },
    
        render: function() {
            var sg = this;
            removeFallbacks();     
            
            sg.utils.getTemplate("js/views/templates/ItemTmpl.jqt", "#itemTmpl", 
                function(){
                    sg.el.fadeOut('fast', function() {
                        sg.el.empty();
                        $.tmpl($("#itemTmpl"), sg.model).appendTo(sg.el);
                        sg.el.fadeIn('fast');
                    });
                    return this;
                });            

        }
    });
    
    
    $.ns("SinglePageApp.Views.PhotoView", PhotoView)
})();
