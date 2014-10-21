$.ajax({
    type: "GET",
    url: "api/Gem",
    dataType: "application/json",
    async: false,
    complete: function (data) {
        $(JSON.parse(data.responseText)).each(function () {
            console.log(this.Name);
        });
    }
});
//console.log(gem);
//
//This post works!
//create a function to include image URLs
var gemDat = {
    Name: "newItemTestAgaina"
}

function postGemNoUrl(gem) {
    $.ajax({
        type: "POST",
        url: "api/Gem",
        dataType: "application/json",
        data: gem,
        complete: warnOnFailure
    });
}

function warnOnFailure(xData, result) {
    console.log(xData);
    console.log(result);
}

//Posting a new image that works
var img = {
Gem:"New"
//Gem1:"Newer"
};
$.ajax({
    type:"POST",
    url:"api/GemImage",
    dataType:"application/json",
    data:img
});