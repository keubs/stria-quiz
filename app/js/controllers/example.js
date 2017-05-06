// @ngInject

function ExampleCtrl($http) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  var apiHost = 'http://local.stria.com';

  $http.post( apiHost + '/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'tester1'
    })
    .then( function( response ) {
      console.log( response.data )
      $http.defaults.headers.common.Authorization = 'Basic YWRtaW46dGVzdGVyMQ==';

      $http.get(apiHost + '/wp-json/wc/v1/products/attributes/6/terms')
      	.then(function(response) {
      		console.log(response);
      	})
    })
    .catch(function(error){
    	console.log(error);
    })
    .catch( function( error ) {
      console.error( 'Error', error.data );
    });

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};

