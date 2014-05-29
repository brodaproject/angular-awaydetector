angular-awaydetector
====================

Detects if a user is away (or idle) from the page

License: [MIT](http://www.opensource.org/licenses/mit-license.php)

Works with Angular 1.2.7+

Usage
-----

```javascript
    // put awaydetector as dependency
    var myApp = angular.module('myapp', ['broda.awayDetector']);
    
    // in your controller
    function MyController($scope, $awaylistener) {
    
        $scope.somevar = 'Hello!';
    
        // initialize the detector
        var listener = $awaylistener.listen();
        
        // when the user gets idle
        listener.on('idle', function () {
            $scope.somevar = '...are you there?';
        });
        
        // when the user gets away
        listener.on('away', function () {
            $scope.somevar = 'You are gone...';
        });
        
        // when the user comes back (only triggers if user already been away or idle)
        listener.on('active', function () {
            $scope.somevar = 'Hey, you are back!';
        });
    }
```

TODO: proper introduction and examples
