var currentDate = moment().format("MM/DD/YYYY");

$(document).ready(function () {

    $("#button").click(function (event) {
        event.preventDefault();
        var city = $("#city").val();

        let search = "";
        for (i = 0; i < 6; i++) {
            $(".cities").html(search);
            search += "<li>" + city + "</li>";
        }

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            city + "&units=imperial" + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";

        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp"

        })
            .then(function (response) {
                console.log(response);


                $(".city").html("<h1>" + response.name + " (" + currentDate + ") </h1> <img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
                $(".temp").text("Temperature: " + response.main.temp + " F°");
                $(".humidity").text("Humidity: " + response.main.humidity + " %");
                $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");


                var lon = response.coord.lon;
                var lat = response.coord.lat;
                
                

                UVindex(lon, lat);
            })

        function UVindex(lon, lat) {
            
            var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=61a632379c3e9a3d1eecd3b47dea0b6b&lat=" + lat + "&lon=" + lon;
            console.log(uvURL);
            $.ajax({
                url: uvURL,
                method: "GET"
                
            }).then(function (uv) {
                    console.log(uv);

                    $(".uvindex").text("UV index: "+ uv.value);

                })
        }



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

                for (let i = 0; i <= 40; i += 8) {
                    $("#forecast").html(boxes);
                    boxes += "<div class='forecastbox'>";
                    boxes += "<p>" + moment(forecast.list[i].dt_txt).format("MM/DD/YYYY") + "</p>";
                    boxes += "<p> <img src='http://openweathermap.org/img/w/" + forecast.list[i].weather[0].icon + ".png'></p>"; 
                    boxes += "<p> Temp: " + forecast.list[i].main.temp + " F°" + "</p>";
                    boxes += "<p> Humidity: " + forecast.list[i].main.humidity + " %" + "</p>";
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