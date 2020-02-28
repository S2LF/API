$( document ).ready(function() {

    // api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
    let api_url = "https://api.openweathermap.org/data/2.5/"
    let key = "025351b8fc539b5baf5dc390033fb417"
    let city_name="Strasbourg"
    let city_id="2643743"

    // $.ajax({
    //     url: api_url +"weather?q="+city_name+"&appid="+key,
    //     contentType: "application/json",
    //     dataType: 'json',
    //     success: function(result){
    //         console.log(result)
    //     }
    // })

    $.post("http://api.openweathermap.org/data/2.5/weather?q=" + city_name +
    "&appid="+key+"&units=metric",
    function (result, status, xhr){
        let table = $("<table><tr><th>Weather Description</th></tr>");

        table.append("<tr><td>Ville:</td><td>" + result.name + "</td></tr>");
        table.append("<tr><td>Pays:</td><td>" + result["sys"]["country"] + 
        "</td></tr>");
        table.append("<tr><td>Vent:</td><td>" + result["wind"]["speed"] + 
        "Km/h</td></tr>");
        table.append("<tr><td>Température actuelle:</td><td>" + result["main"]["temp"] + 
        " °C</td></tr>");
        table.append("<tr><td>Humidité:</td><td>" + result["main"]["humidity"] +"</td></tr>");
        table.append("<tr><td>Météo:</td><td>" + result["weather"][0]["description"] +"</td></tr>");

        $("#message").html(table);
    }
    ).fail(function (xhr, status, error) {
        alert("Result: " + status + " " + error + " " + 
        xhr.status + " " + xhr.statusText);
    });

$(document).ajaxStart(function () {
$("img").show();
});

$(document).ajaxStop(function () {
$("img").hide();
});

function Validate() {
var errorMessage = "";
if ($("input[id='cityRadio']").is(":checked") == false) {
    errorMessage += "? Select City";
}
return errorMessage;
}
});





