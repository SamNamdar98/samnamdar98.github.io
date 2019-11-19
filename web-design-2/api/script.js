$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9c2021cf4dba4aa57f8c46da801d0f2d", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

$(".icon").attr("src", icon);
$(".weather").append(weather);
$(".temp").append(temp);

});
