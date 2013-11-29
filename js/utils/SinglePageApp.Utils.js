(function() {
    
  
   /**
	 * Utils class, which will contain all the common util functions
	 * @class Utils functions
	 * @constructor
	 * @name SinglePageApp.Utils
	 */
   function Utils() {
	
   }
	
   /**
	 * Responsible for retrieving the template and calling the callback function
	 * @function
	 * @memberOf SinglePageApp.Utils
	 */
   Utils.prototype.getTemplate = function(path, id, fn) {
      var tmpl = $(id);
      if(tmpl.length) {
         fn.call(this, tmpl);
         return;
      }

      $.get(path, $.proxy(function(resp) {      
         $("body").append(resp);	    
         var tmpl = $(id);
         fn.call(this, tmpl);
      }, this));
   }
  
   /**
   * Update a component record
   * @param {Object} model The model, UI fields change listener is attached to.
   * @function
   * @memberOf 
   */  
   Utils.prototype.commonChangeListener = function(model) {
      $('input').change(function(){
         var obj = {};
         obj[this.name] = this.value;
         model.set(obj);
      })     
   }
   
   Utils.prototype.apiRequest = function(url, success, options) {
      
      var defaultOptions = {
        url: url,
        success: success,
        type: "GET",
        dataType: "json",
        async: true
      };
      
      options = $.extend(defaultOptions, options);
    
      $.ajax(options);
    }
    
    $.ns("SinglePageApp.Utils", Utils);
})();