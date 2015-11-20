

function GameCntl($scope, $timeout) {
    $scope.problems = [
        ["1", "+ 2"],
        ["3", "- 4"]
    ];

    $scope.generate = function() {
        for (var i = 0; i < 20; i++)
        {
            $scope.problems.push(["1", "+ 2"]);
        }
    };
    
    $scope.generate();
}