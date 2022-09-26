let weather={
    "apikey":"28bc8906e5f046a4905172625222509",
    fetchweather:function(city){
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday1(data));
        
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday2(data));
        
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday3(data));
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday4(data));
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday5(data));
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday6(data));
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday7(data));
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=28bc8906e5f046a4905172625222509&q="+ city +"&days=8&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((data) => this.forecastday8(data));
        
    },
    displayweather: function(data){
        const{ name, country, localtime }= data.location;
        const{temp_c,wind_kph,humidity}=data.current;
        const{text, icon}=data.current.condition;
        console.log(name,country,localtime,temp_c,wind_kph,humidity,text,icon)
        document.querySelector(".navbar_city").innerText = ""+ name + ", "+country;
        document.querySelector(".date-time").innerText =""+localtime;
        document.querySelector(".temp").innerText =+temp_c+ "°C";
        document.querySelector(".weather-icon").src=""+icon;
        document.querySelector(".description").innerText =""+text;
        document.querySelector(".wind-speed").innerText ="Wind: "+wind_kph+"km/h";
        document.querySelector(".humidity").innerText ="humidtiy: "+humidity+"%";
    },
    forecastday1: function(data){
        const{date}=data.forecast.forecastday[1];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[1].day
        const{text,icon}=data.forecast.forecastday[1].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date").innerText =""+date;
        document.querySelector(".temp1").innerText =""+maxtemp_c+"°C / "+ mintemp_c+"°C ";
        document.querySelector(".weather-icon0").src=""+icon;
        document.querySelector(".description1").innerText =""+text;
    },
    forecastday2: function(data){
        const{date}=data.forecast.forecastday[2];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[2].day
        const{text,icon}=data.forecast.forecastday[2].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date1").innerText =""+date;
        document.querySelector(".temp2").innerText =+maxtemp_c+"°C / "+ mintemp_c+ "°C";
        document.querySelector(".weather-icon1").src=""+icon;
        document.querySelector(".description2").innerText =""+text;
    },
    forecastday3: function(data){
        const{date}=data.forecast.forecastday[3];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[3].day
        const{text,icon}=data.forecast.forecastday[3].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date2").innerText =""+date;
        document.querySelector(".temp3").innerText =+maxtemp_c+"°C / "+ mintemp_c+ "°C";
        document.querySelector(".weather-icon2").src=""+icon;
        document.querySelector(".description3").innerText =""+text;
    },
    forecastday4: function(data){
        const{date}=data.forecast.forecastday[4];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[4].day
        const{text,icon}=data.forecast.forecastday[4].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date3").innerText =""+date;
        document.querySelector(".temp4").innerText =+maxtemp_c+"°C / "+ mintemp_c+ "°C";
        document.querySelector(".weather-icon3").src=""+icon;
        document.querySelector(".description4").innerText =""+text;
    },
    forecastday5: function(data){
        const{date}=data.forecast.forecastday[5];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[5].day
        const{text,icon}=data.forecast.forecastday[5].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date4").innerText =""+date;
        document.querySelector(".temp5").innerText =+maxtemp_c+"°C / "+ mintemp_c+ "°C";
        document.querySelector(".weather-icon4").src=""+icon;
        document.querySelector(".description5").innerText =""+text;
    },
    forecastday6: function(data){
        const{date}=data.forecast.forecastday[6];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[6].day
        const{text,icon}=data.forecast.forecastday[6].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date5").innerText =""+date;
        document.querySelector(".temp6").innerText =+maxtemp_c+"°C / "+ mintemp_c+ "°C";
        document.querySelector(".weather-icon5").src=""+icon;
        document.querySelector(".description6").innerText =""+text;
    },
    forecastday7: function(data){
        const{date}=data.forecast.forecastday[7];
        const{maxtemp_c,mintemp_c}=data.forecast.forecastday[7].day
        const{text,icon}=data.forecast.forecastday[7].day.condition;
        console.log(date,text,maxtemp_c,mintemp_c,icon);
        document.querySelector(".date6").innerText =""+date;
        document.querySelector(".temp7").innerText =+maxtemp_c+"°C / "+ mintemp_c+ "°C";
        document.querySelector(".weather-icon6").src=""+icon;
        document.querySelector(".description7").innerText =""+text;
    },


    search: function(){
      this.fetchweather(document.querySelector(".search-box").value);
    }
};    
    document.querySelector(".search button")
    .addEventListener("click", function(){
    weather.search();
    });


