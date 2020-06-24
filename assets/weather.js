$(document).ready(function () {

    $("#button").click(function (event) {
        event.preventDefault();
        var city = $("#city").val();

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            city + "&units=imperial" + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";

        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp"

        })
            .then(function (response) {
                console.log(response);



                $(".city").html("<h1>" + response.name + response.weather[0].icon + "</h1>");
                $(".temp").text("Temperature: " + response.main.temp);
                $(".humidity").text("Humidity: " + response.main.humidity);
                $(".wind").text("Wind Speed: " + response.wind.speed);
            })

        var iconURL = "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city + "&units=imperial" + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";

        $.ajax({
            url: iconURL,
            method: "GET",
            dataType: "jsonp"

        })
        .then(function (forecast) {
            console.log("Forecast data = " + JSON.stringify(forecast));
            var boxes = "";

            for (let i = 0; i <= 40; i+=8) {
                $("#forecast").html(boxes);
                boxes += "<div class='forecastbox'>";
                boxes += "<p>"+ forecast.list[i].dt_txt + "</p>";
                boxes += "<p>"+ forecast.list[i].weather[0].icon + "</p>";
                boxes += "<p>"+ forecast.list[i].main.temp + "</p>";
                boxes += "<p>"+ forecast.list[i].main.humidity + "</p>";
                boxes += "</div>";
                
            }

            
            
        })

    })
});

// UVindex(lat, lon);

// function UVindex(lat, lon) {
//     var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=61a632379c3e9a3d1eecd3b47dea0b6b&lat=" + lat + "&lon=" + lon;

//     $.ajax({
//         url: queryURL,
//         method: "GET",
//         dataType: "jsonp"
//     })

//         .then(function (response) {
//             console.log(response);

//             $(".uvindex").text("UV index: " + response.value);    

//         })
// }