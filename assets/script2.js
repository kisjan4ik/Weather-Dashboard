var searchCity = $("#city").val();
// var searchCity = $("#city").textContent;?????
console.log(searchCity);

$("button").on("click", function (event) {
    event.preventDefault();


    function weather(searchCity) {


        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            searchCity + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";

        $.ajax({
            url: queryURL,
            method: "GET",
        })

            .then(function (response) {

                console.log(response);
                UVindex(lat, lon);
            })
    }

    function UVindex(lat, lon) {
        var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=61a632379c3e9a3d1eecd3b47dea0b6b&lat=" + lat + "&lon=" + lon;

        $.ajax({
            url: queryURL,
            method: "GET",
        })

            .then(function (response) {

                // Log the queryURL
                console.log(response);

            })
    }


    function iconWeather() {
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" +
            searchCity + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";

        $.ajax({
            url: queryURL,
            method: "GET",
        })

            .then(function (response) {

                // Log the queryURL
                console.log(response);

            })
    }

    weather(searchCity)

})