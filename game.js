
function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}


function GameCntl($scope) {
    $scope.t = '+';
    $scope.amin = 0;
    $scope.amax = 5;
    $scope.bmin = 1;
    $scope.bmax = 5;
    $scope.problems = [];

    $scope.get_params = function() {
        var params = window.location.hash.split("/");

        if (params.length == 6) {
            $scope.t = params[1];
            $scope.amin = params[2];
            $scope.amax = params[3];
            $scope.bmin = params[4];
            $scope.bmax = params[5];
        }
    }

    $scope.generate = function() {
        var a, b;

        $scope.problems = [];

        for (var i = 0; i < 24; i++)
        {
            a = get_random($scope.amin, $scope.amax);
            b = get_random($scope.bmin, $scope.bmax);
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

