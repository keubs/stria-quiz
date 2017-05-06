function QuizService() {
	'ngInject';

	const service = {};

	service.topQuiz = function(type, coverage){
	switch(type) {
		case 'teardrop':
			switch(coverage) {
				case 1:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 2:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 3:
					return [
						'bandeau',
					];
					break;
				case 4:
					return [
						'bandeau',
					];
					break;
				case 5:
					return [
						'bandeau',
					];
					break;

			}
			break;
		case 'on-edge':
			switch(coverage) {
				case 1:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 2:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 3:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 4:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 5:
					return [
						'bandeau',
					];
					break;

			}
			break;

		case 'round-full':
			switch(coverage) {
				case 1:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 2:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 3:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 4:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 5:
					return [
						'bandeau',
						'triangle',
					];
					break;

			}
			break;

		case 'bottom-full':
			switch(coverage) {
				case 1:
					return [
						'triangle',
						'bandeau',
					];					
					break;
				case 2:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 3:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 4:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 5:
					return [
						'bandeau',
					];
					break;
			}
			break;
		case 'bottom-edge':
			switch(coverage) {
				case 1:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 2:
					return [
						'triangle',
						'bandeau',
					];
					break;
				case 3:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 4:
					return [
						'bandeau',
						'triangle',
					];
					break;
				case 5:
					return [
						'bandeau',
					];
					break;
			}
			break;
	}
}
	return service;
}

export default {
	name: 'QuizService',
	fn: QuizService,
}