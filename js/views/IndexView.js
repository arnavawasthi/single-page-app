/**
 * IndexView: The default view seen when opening up the application for the first time. This 
 * contains the first level of images in the JSON store (the level-one albums). Prior to rendering 
 * our jQuery templates here we remove any messages or elements displayed in the version where 
 * JavaScript is disabled.
 * @type Backbone.View
 */

(function(){
    
    var IndexView = Backbone.View.extend({
        el: $('#main'),
        utils: new SinglePageApp.Utils(),
//        indexTemplate: $("#indexTmpl").template(),

        render: function() {
            removeFallbacks();
            var sg = this;
        
            sg.utils.getTemplate("js/views/templates/IndexTmpl.jqt", "#indexTmpl", 
                function(){
                    sg.el.fadeOut('fast', function() {
                        sg.el.empty();
                        $.tmpl($("#indexTmpl"), sg.model.toArray()).appendTo(sg.el);
                        sg.el.fadeIn('fast');
                    });
                    return this;
                });        

        }

    });    
    
    $.ns("SinglePageApp.Views.IndexView", IndexView);
})()
