function QuizService() {
	'ngInject';

	const service = {};

	service.topQuiz = function(type, coverage){
		switch(type) {
			case 'teardrop':
				switch(coverage) {
					case 1:
					case 2:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;
					case 3:
					case 4:
					case 5:
						return [
							'aludra-bandeau',
						];
						break;

				}
				break;
			case 'on-edge':
				switch(coverage) {
					case 1:
					case 2:
						return [
							'chara-triangle',
							'aludra-bandeau',
						];
						break;
					case 3:
					case 4:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;
					case 5:
						return [
							'aludra-bandeau',
						];
						break;

				}
				break;

			case 'round-full':
				switch(coverage) {
					case 1:
						return [
							'chara-triangle',
							'aludra-bandeau',
						];
						break;
					case 2:
						return [
							'chara-triangle',
							'aludra-bandeau',
						];
						break;
					case 3:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;
					case 4:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;
					case 5:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;

				}
				break;

			case 'bottom-full':
				switch(coverage) {
					case 1:
					case 2:
						return [
							'chara-triangle',
							'aludra-bandeau',
						];					
						break;
					case 3:
					case 4:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;
					case 5:
						return [
							'aludra-bandeau',
						];
						break;
				}
				break;
			case 'bottom-edge':
				switch(coverage) {
					case 1:
					case 2:
						return [
							'chara-triangle',
							'aludra-bandeau',
						];
						break;
					case 3:
					case 4:
						return [
							'aludra-bandeau',
							'chara-triangle',
						];
						break;
					case 5:
						return [
							'aludra-bandeau',
						];
						break;
				}
			break;
		}
	}

	service.bottomQuiz = function(shape, coverage, torso, backside) {
		if(shape === 'rectangle' && coverage === 1 && torso === 'short' && backside === 'small')
			return [
				'maia-string-bottoms',
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'short' && backside === 'average')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'short' && backside === 'packing')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 1 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'short' && backside === 'small')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'short' && backside === 'average')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'short' && backside === 'packing')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 2 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 3 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 4 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'rectangle' && coverage === 5 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'short' && backside === 'small')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'short' && backside === 'average')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'short' && backside === 'packing')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 1 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'short' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'short' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'short' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 2 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 3 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 4 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'hourglass' && coverage === 5 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'oval')
			return [
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'short' && backside === 'small')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'short' && backside === 'average')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'short' && backside === 'packing')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 1 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'short' && backside === 'small')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'short' && backside === 'average')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'short' && backside === 'packing')
			return [
				'maia-string-bottoms', 
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 2 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 3 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'average' && backside === 'small')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'average' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'average' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'long' && backside === 'small')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'long' && backside === 'average')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 4 && torso === 'long' && backside === 'packing')
			return [
				'rana-ruched-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'short' && backside === 'small')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'short' && backside === 'average')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'short' && backside === 'packing')
			return [
				'rana-ruched-bottoms',
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'average' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'average' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'average' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'long' && backside === 'small')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'long' && backside === 'average')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
		if(shape === 'triangle' && coverage === 5 && torso === 'long' && backside === 'packing')
			return [
				'maia-string-bottoms', 
				'ara-high-waisted-bottoms'
			];
	}
	return service;
}

export default {
	name: 'QuizService',
	fn: QuizService,
}