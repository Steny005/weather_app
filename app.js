 async function checkWeather(city){
	const apiKey=;
	const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	const weather_data= await fetch(url).then(response => response.json());
	temperature.innerHTML=`${Math.round(weather_data.main.temp-273.75)}°C`
	}

	searchBtn.addEventListener('click',()=>{
		checkWeather(cityInput.value);
	}); 