axios.defaults.baseURL = 'https://andruxnet-random-famous-quotes.p.mashape.com';
axios.defaults.headers.common['X-Mashape-Key'] = 'kAica0sHWemshYVboYcEWw510FR8p1Hc5Pfjsn6BS9ArNYkybu';

$(document).ready(function(){
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
			$('#quote').fadeIn(3000, function () {
				quote.innerHTML = response.data.quote;
			});			
			$('#author').fadeIn("slow", function () {
				author.innerHTML = response.data.author;
			});
		})
		.catch(function (error) {
			console.log(error)
		});		
	}
});
