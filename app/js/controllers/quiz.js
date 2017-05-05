// @ngInject

function QuizCtrl() {
	const vm = this;
	vm.currentStep = 1;
	vm.quiz = {
		steps : [
			{
				number : 1,
				question: 'What is your boob shape?',
				answers : [
					'On the Edge',
					'Round + Full',
					'Bottom + Full',
					'Bottom + On the Edge',
				],
				selectedAnswer : 0
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
				selectedAnswer: 0
			},

		]
	}

  	vm.next = function() {
  		vm.currentStep +=1;
  	}

  	vm.prev = function() {
  		vm.currentStep -=1;
  	}

  	vm.selectAnswer = function(index) {
  		vm.quiz.steps[vm.currentStep-1].selectedAnswer = index;
  		vm.selectedAnswer = vm.quiz.steps[vm.currentStep-1].answers[index];
  		console.log(vm.quiz.steps[vm.currentStep-1].answers[index]);
  	}
};

export default {
	name: 'QuizCtrl',
	fn: QuizCtrl
}