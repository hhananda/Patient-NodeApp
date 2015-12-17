app.service('statesResource', ['$resource', function ($resource) {
    var result = $resource('http://localhost:3333/api/states', {},
            {
                update: { method: 'PUT' },
                query: {
                    isArray: true
                }
            });
    return result;
}]);
