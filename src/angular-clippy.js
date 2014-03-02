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
    .directive('clippy', ['$parse', function($parse) {
      return {
        restrict: 'E',
        transclude: false,
        scope: true,
        link: function(scope, element, attrs) {
          var agentName = attrs.agent || 'Clippy'
            , onInit = attrs.onInit
            , _agent
            ;
          clippy.load(agentName, function(agent) {
            _agent = agent;
            agent.moveTo(element.offset().left, element.offset().top);
            agent.show();
            scope.$apply(function(scope){
              $parse(onInit)(scope)(agent);
            });
          });
          scope.$on('$destroy', function() {
            if (_agent) { _agent.hide(); }
          });
        }
      };
    }]);
}());
