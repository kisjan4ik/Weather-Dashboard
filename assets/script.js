
$("button").on("click", function (event) {
    event.preventDefault();
    var searchCity = $(this).attr("form-control");

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" +
        searchCity + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";
    
        var iconURL = "http://openweathermap.org/img/wn/" + response.list.weather.icon + "@2x.png";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<h5>" + response.name + response.list.dt + iconURL);

            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;

            // add temp content to html
            $(".temp").text("Temperature (K) " + response.main.temp);
            $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".wind").text("Wind Speed: " + response.list.wind.speed);
            $(".uvindex").text("UV index: " + response.wind.speed);
            // Log the data in the console as well
            console.log("City: " + response.name + response.list.dt + iconURL);
            console.log("Temperature (F): " + tempF);
            console.log("Humidity: " + response.main.humidity);
            console.log("Wind Speed: " + response.list.wind.speed);
            console.log("UV index: " + response.wind.speed);

        });

})