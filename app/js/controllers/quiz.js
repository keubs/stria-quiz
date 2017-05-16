// @ngInject

function QuizCtrl($http, QuizService, $sce) {
	const vm = this;
	const apiHost = 'http://stria.keubs.webfactional.com';
	// vm.quiz[quiz].current = 0;
	vm.quiz = {
		tops: {
			current: 0,
			results: [],
			loaded: false,
			finished: false,
			displayResults: [],
			steps : [
				{
					number : 1,
					// question: 'What is your boob shape?',
					question: 'Question 1',
					answers : [],
					selectedAnswer : null
				},
				{
					number : 2,
					// question: 'What boob coverage do you prefer?',
					question: 'Question 2',
					answers: [],
					selectedAnswer: null,
					border_questions: [
						'Locked &amp; Loaded',
						'Moderate',
						'Show it off',
					]
				},

			],
		},
		bottoms: {
			current:0,
			results: [],
			loaded: false,
			finished: false,
			displayResults: [],
			steps : [
				{
					number: 1,
					// question: 'What is your body shape?',
					question: 'Question 3',
					answers: [],
					selectedAnswer : null
				},
				{
					number: 2,
					// question: 'What butt coverage do you prefer?',
					question: 'Question 4',
					answers: [],
					selectedAnswer : null,
					border_questions: [
						'Full',
						'Moderate',
						'Cheeky',
					]
				},
				{
					number: 3,
					// question: 'How long is your torso?',
					question: 'Question 5',
					answers: [],
					selectedAnswer : null
				},
				{
					number: 4,
					// question: 'How much backside are you working with?',
					question: 'Question 6',
					answers: [],
					selectedAnswer : null
				}
			]
		},

		finish: {
			title : 'These are the suits<br /> best suited for you!'
		}

	};

	vm.init = function() {
	    $http.post(apiHost + '/wp-json/jwt-auth/v1/token', {
	    	username: 'admin',
	    	password: 'tester1'
	    })
	    .then(function(response){
	    	console.log(response.data);
	    	$http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;

	    	/*======================================
	    	=            Tops Quiz Data            =
	    	======================================*/
	    	
			$http.get(apiHost + '/wp-json/wc/v2/products/attributes/6/terms')
				.then(function(response) {
					vm.quiz.tops.loaded = true;
					vm.quiz.tops.steps[0].answers = response.data;
				})
				.catch(function(error){
					console.log(error);
				});

			$http.get(apiHost + '/wp-json/wc/v2/products/attributes/5/terms')
				.then(function(response) {
					vm.quiz.tops.steps[1].answers = response.data;
				})
				.catch(function(error){
					console.log(error);
				});
	    	
	    	
	    	/*=====  End of Tops Quiz Data  ======*/
	    	
	    	/*=========================================
	    	=            Bottoms Quiz data            =
	    	=========================================*/
	    	
	    	$http.get(apiHost + '/wp-json/wc/v2/products/attributes/7/terms')
	    		.then(function(response) {
	    			vm.quiz.bottoms.loaded = true;
	    			vm.quiz.bottoms.steps[0].answers = response.data;
	    		})
	    		.catch(function(error){
	    			console.log(error);
	    		});

			$http.get(apiHost + '/wp-json/wc/v2/products/attributes/8/terms')
				.then(function(response) {
					vm.quiz.bottoms.steps[1].answers = response.data;
				})
				.catch(function(error){
					console.log(error);
				});

			$http.get(apiHost + '/wp-json/wc/v2/products/attributes/9/terms')
				.then(function(response) {
					vm.quiz.bottoms.steps[2].answers = response.data;
				})
				.catch(function(error){
					console.log(error);
				});

			$http.get(apiHost + '/wp-json/wc/v2/products/attributes/10/terms')
				.then(function(response) {
					vm.quiz.bottoms.steps[3].answers = response.data;
				})
				.catch(function(error){
					console.log(error);
				});
	    	
	    	/*=====  End of Bottoms Quiz data  ======*/
	    	

			$http.get(apiHost + '/wp-json/wc/v2/products')
				.then(function(response) {
					vm.products = response.data;
				})
				.catch(function(error){
					console.log(error);
				});
	    });


	};

  	vm.next = function(quiz) {
  		if(vm.quiz[quiz].current == vm.quiz[quiz].steps.length-1){
  			vm.finish(quiz);
  		}
  		else {	
  			vm.quiz[quiz].current +=1;
  		}
  	};

  	vm.prev = function(quiz) {
  		vm.quiz[quiz].current -=1;
  	};

  	vm.selectAnswer = function(q, answer, index) {
		vm.quiz[q].steps[vm.quiz[q].current].selectedAnswer = answer;
		vm.quiz[q].steps[vm.quiz[q].current].answers.forEach(function(answer){
			answer.selected = false;
		});

		vm.quiz[q].steps[vm.quiz[q].current].answers[index].selected = true;
		vm.next(q);
  	};

  	vm.finish = function(quiz) {
  		vm.quiz[quiz].finished = true;
  		vm.quiz[quiz].results = [];
  		vm.quiz[quiz].displayResults = [];
	  	vm.quiz[quiz].steps[vm.quiz[quiz].current].question = vm.quiz.finish.title;

  		if(quiz === 'tops') {
		  	vm.quiz[quiz].results = QuizService.topQuiz(vm.quiz[quiz].steps[0].selectedAnswer, parseInt(vm.quiz[quiz].steps[1].selectedAnswer));
	    }
  		else {	
  			vm.quiz[quiz].results = QuizService.bottomQuiz(
  		  				vm.quiz[quiz].steps[0].selectedAnswer, 
  		  				parseInt(vm.quiz[quiz].steps[1].selectedAnswer),
  		  				vm.quiz[quiz].steps[2].selectedAnswer, 
  		  				vm.quiz[quiz].steps[3].selectedAnswer );}

  		vm.quiz[quiz].results.forEach(function(result){
  			vm.quiz[quiz].displayResults.push(vm.search(result, vm.products));
  		})
  	};

  	vm.search = function(nameKey, myArray){
	    for (var i=0; i < myArray.length; i++) {
	        if (myArray[i].slug === nameKey) {
	            return myArray[i];
	        }
	    }
	};
};

export default {
	name: 'QuizCtrl',
	fn: QuizCtrl
}