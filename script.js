var input = document.getElementById("amount");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
}

let dym_format = formatDate(Date());
let url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=" + dym_format + "&json";

function dataHandler() {
    $.ajax({
        type: "GET",
        url: url,
        success: function (t) {
            if ($('#amount').val() >= 100000) {
                $("#result").html("You have too big salary. СБУ is watching you :)")
            }
            $("#date").html(t[0].exchangedate), $("#price").html("1 USD = " + t[0].rate.toFixed(2) + " UAH"), $("#submit").on("click", function () {
                $("#amount").val() >= 1 && !0 !== isNaN($("#amount").val()) ? $("#result").html((t[0].rate.toFixed(2) * $("#amount").val()).toFixed(2) + " UAH") : $("#result").html("Error! There is no digits or letters are here!")
            })
        }
    });
}

dataHandler();
