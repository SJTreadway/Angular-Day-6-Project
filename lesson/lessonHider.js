(function() {
  angular.module('directivePractice')
         .directive('lessonHider', function() {
           return {
             restrict: 'E',
             templateUrl: '/lesson/lessonHider.html',
             scope: {
               lesson: '=',
               dayAlert: '&',
               line: '=',
             },
             controller: function($scope, lessonService) {
               $scope.getSchedule = lessonService.getSchedule();
             },
             link: function(scope, element, attrs) {
               var thingy = false;
               scope.$watch('line', function(newCheck, old) {
                 var decorator = newCheck && thingy ? 'line-through' : 'none';
                 element.css('text-decoration', decorator);
               });
               scope.getSchedule.then(function(res) {
               scope.schedule = res.data;
               scope.schedule.forEach(function( scheduleDay ) {
                 if (scheduleDay.lesson === scope.lesson) {
                   thingy = true;
                      scope.lessonDay = scheduleDay.weekday;
                        element.css('text-decoration', 'line-through');
                      return;
                    }
               });
             })
             },
         };
       });



})();
