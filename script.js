$.ajax({
    type: 'GET',
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    dataType: 'json',
    success: function (data) {
        $('#date').html(data[0].exchangedate);
        $('#price').html('1 USD = ' + (data[0].rate).toFixed(2) + ' UAH');
        $('#submit').on('click', function () {
            if ($('#amount').val() >= 1 && isNaN($('#amount').val()) !== true) {
                $('#result').html(((data[0].rate).toFixed(2) * $('#amount').val()).toFixed(2) + " UAH");
            } else {
                $('#result').html('Error! There is no digits or letters are here!')
            }
        });
    },
});


