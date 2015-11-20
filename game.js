
function get_random(min, max) {
    return Math.floor(Math.random() * (max - min)) + parseInt(min);
}


function GameCntl($scope) {
    $scope.t = '+';
    $scope.min = 0;
    $scope.max = 5;
    $scope.problems = [];

    $scope.get_params = function() {
        var params = window.location.hash.split("/");

        if (params.length == 4) {
            $scope.t = params[1];
            $scope.min = params[2];
            $scope.max = params[3];
        }
    }

    $scope.generate = function() {
        var a, b;

        $scope.problems = [];

        for (var i = 0; i < 24; i++)
        {
            a = get_random($scope.min, $scope.max);
            b = get_random($scope.min, $scope.max);
            $scope.problems.push([a, $scope.t + " " + b]);
        }
    };

    $(window).on('hashchange', function() {
        $scope.get_params();
        $scope.generate();
        $scope.$apply();
    });
    
    $scope.get_params();
    $scope.generate();
}

