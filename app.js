const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7f0858be17msh9edb5ad6a749723p1c9428jsn629dedf5d649',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options),
then(response => response.json())
.then(response => console.log(response))
.catch(err =>  console.error(err));	
	
