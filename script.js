var input = document.getElementById("amount");

function formatDate(t) {
    var e = new Date(t), a = "" + (e.getMonth() + 1), n = "" + e.getDate(), o = e.getFullYear();
    return a.length < 2 && (a = "0" + a), n.length < 2 && (n = "0" + n), [o, a, n].join("")
}

input.addEventListener("keyup", function (t) {
    13 === t.keyCode && (t.preventDefault(), document.getElementById("submit").click())
});
let dym_format = formatDate(Date()),
    url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=" + dym_format + "&json";

function dataHandler() {
    $.ajax({
        type: "GET", url: url, success: function (t) {
            $("#amount").val() >= 1e5 && $("#result").html("You have too big salary. СБУ is watching you :)"), $("#date").html(t[0].exchangedate), $("#price").html("1 USD = " + t[0].rate.toFixed(2) + " UAH"), $("#submit").on("click", function () {
                $("#amount").val() >= 1 && !0 !== isNaN($("#amount").val()) ? $("#result").html((t[0].rate.toFixed(2) * $("#amount").val()).toFixed(2) + " UAH") : $("#result").html("Error! There is allowed only digits!")
            })
        }
    })
}

dataHandler();
