(function() {
  angular.module('directivePractice')
         .controller('lessonCtrl', function($scope) {

          $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

          $scope.removeLesson = function(lesson) {
            lesson = lesson.toLowerCase();
            for (var i = 0; i < $scope.lessons.length; i++) {
              if ($scope.lessons[i].toLowerCase() === lesson) {
                $scope.lessons.splice(i, 1);
              }
            }
            $scope.lesson = '';
            return $scope.lesson;
          };

          $scope.announceDay = function(lesson, day) {
            if (day === undefined) {
              alert('This lesson is not available.');
              return;
            }
            alert(lesson + ' is active on ' + day + '.');
          };

         });



})();
