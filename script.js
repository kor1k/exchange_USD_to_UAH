$.ajax({
    type: 'GET',
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    dataType: 'json',
    success: function (data) {
        var exchange_date = (data[0].exchangedate);
        var rate_value = (data[0].rate).toFixed(2);
        $('#date').html(exchange_date);
        $('#price').html('1 USD = ' + rate_value + ' UAH');
        $('#submit').on('click', function () {
            if ($('#amount').val() >= 1) {
                $('#result').html((rate_value * $('#amount').val()).toFixed(2) + " UAH");
            } else {
                $('#result').html('Enter at least 1 digit!')
            }
        });
    },
});


