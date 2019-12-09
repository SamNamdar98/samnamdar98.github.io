$(function(){

    var loc;

    $.getJSON('http://ipinfo.io', function(d){
        console.log("assigning the data...")
        loc = d.loc;
    })

})
