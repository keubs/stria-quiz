// @ngInject

function QuizCtrl($http, QuizService) {
	const vm = this;
	const apiHost = 'http://local.stria.com';
	// vm.quiz.current = 0;
	vm.quiz = {
		current: 0,
		steps : [
			{
				number : 1,
				question: 'What is your boob shape?',
				answers : [
				],
				selectedAnswer : null
			},
			{
				number : 2,
				question: 'What boob coverage do you prefer?',
				answers: [
					1,
					2,
					3,
					4,
					5,
				],
				selectedAnswer: null
			},

		],
		results: []
	};

	vm.init = function() {
	    $http.defaults.headers.common.Authorization = 'Basic YWRtaW46dGVzdGVyMQ==';

		$http.get(apiHost + '/wp-json/wc/v2/products/attributes/5/terms')
			.then(function(response) {
				vm.quiz.steps[0].answers = response.data;
			})
			.catch(function(error){
				console.log(error);
			});

		$http.get(apiHost + '/wp-json/wc/v2/products/attributes/6/terms')
			.then(function(response) {
				vm.quiz.steps[1].answers = response.data;
			})
			.catch(function(error){
				console.log(error);
			});

		$http.get(apiHost + '/wp-json/wc/v2/products')
			.then(function(response) {
				vm.products = response.data;
			})
			.catch(function(error){
				console.log(error);
			});
	};

  	vm.next = function() {
  		vm.quiz.current +=1;
  	};

  	vm.prev = function() {
  		vm.quiz.current -=1;
  	};

  	vm.selectAnswer = function(answer) {
  		console.log(answer);
		vm.quiz.steps[vm.quiz.current].selectedAnswer = answer;
  	};

  	vm.finish = function() {
  		console.log(vm.quiz.steps[0].selectedAnswer, vm.quiz.steps[1].selectedAnswer);
  		vm.quiz.results = QuizService.topQuiz(vm.quiz.steps[0].selectedAnswer, parseInt(vm.quiz.steps[1].selectedAnswer));
  	}
};

export default {
	name: 'QuizCtrl',
	fn: QuizCtrl
}