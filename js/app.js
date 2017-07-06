axios.defaults.baseURL = 'https://andruxnet-random-famous-quotes.p.mashape.com';
axios.defaults.headers.common['X-Mashape-Key'] = 'kAica0sHWemshYVboYcEWw510FR8p1Hc5Pfjsn6BS9ArNYkybu';

$(document).ready(function(){
	var txtColor = ['#ECF0F1'];
	var bgColor = ['#2C3E50', '#E74C3C', '#3498DB', '#2980B9'];

	var author = document.querySelector('#author');
	var quote = document.querySelector('#quote');

	setInterval(function () {
		getQuote();
	}, 5000);

	function getQuote() {
		axios.get('/', {
			params: {
				cat: 'famous',
				count: 1
			}
		})
		.then(function (response) {
			$('.jumbotron').css("background-color", bgColor[getRandomInt(0, bgColor.length)]);
			$('.jumbotron').css("color", txtColor[0]);

			$('#quote').fadeIn(3000, function () {
				quote.innerHTML = response.data.quote;
			});			
			$('#author').fadeIn("slow", function () {
				author.innerHTML = response.data.author;
			});
		})
		.catch(function (error) {
			console.log(error);
			$('#quote').text('Whoops! Something went wrong. Please try again later.')
		});		
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
});
