function weather(searchCity) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchCity + "&appid=61a632379c3e9a3d1eecd3b47dea0b6b";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
    })

        .then(function (response) {

            // Log the queryURL
            console.log(response);
            UVindex(lat, lon);
        })
}

function UVindex(lat, lon) {
    var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=61a632379c3e9a3d1eecd3b47dea0b6b&lat=" + lat + "&lon=" + lon;

    console.log(queryURL);

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

}

$("button").on("click", function (event) {
    event.preventDefault();

    var searchCity = $("form-control").val();
    console.log(searchCity);

    weather(searchCity)

})