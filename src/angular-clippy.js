angular
  .module('angularClippy', [])
  .config(function() {
    clippy.BASE_PATH = './Agents/';
  })
  .directive('clippy', [function() {
    return {
      restrict: 'E',
      transclude: false,
      scope: true,
      link: function(scope, element, attrs) {
        clippy.load('Clippy', function(agent) {
	  agent.moveTo(element.offset().left, element.offset().top);
	  agent.show();
	});
      }
    };
  }]);
