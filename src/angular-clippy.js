/*global angular, clippy */
(function(){
  'use strict';
  var scripts = document.getElementsByTagName('script')
    , currentScriptPath = scripts[scripts.length-1].src
    ;

  angular
    .module('angularClippy', [])
    .config(function() {
      clippy.BASE_PATH = currentScriptPath.replace('angular-clippy.js', 'Agents/');
    })
    .directive('clippy', [function() {
      return {
        restrict: 'E',
        transclude: false,
        scope: true,
        link: function(scope, element, attrs) {
          var agentName = attrs.agent || 'Clippy'
            , callback = attrs.setup
            ;
          clippy.load(agentName, function(agent) {
            agent.moveTo(element.offset().left, element.offset().top);
            agent.show();
            if (callback) {
              scope.$apply(function(scope){
                scope[callback](agent);
              });
            }
          });
        }
      };
    }]);
}());
