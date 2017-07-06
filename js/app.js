axios.defaults.baseURL = 'https://andruxnet-random-famous-quotes.p.mashape.com';
axios.defaults.headers.common['X-Mashape-Key'] = 'kAica0sHWemshYVboYcEWw510FR8p1Hc5Pfjsn6BS9ArNYkybu';

$(document).ready(function(){
	var author = document.querySelector('#author');
	var quote = document.querySelector('#quote');
	var button = document.querySelector('#next');
	button.addEventListener('click', getQuote);

	getQuote();

	function getQuote() {
		axios.get('/', {
			params: {
				cat: 'famous',
				count: 1
			}
		})
		.then(function (response) {
			author.innerHTML = response.data.author;
			quote.innerHTML = response.data.quote;
		})
		.catch(function (error) {
			console.log(error)
		});		
	}
});
