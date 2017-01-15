
function check_syntax(calc_input) {

};

function submit_calc_input() {
    var input = $('.calc_input').val();
    console.log(input);
    var output = eval(input);
    console.log(output);
    $('.result_box').html(output);
};

$('.calc_input')[0].addEventListener('keypress', 
    function (e) {
            console.log(e.keyCode);
            if (!((e.keyCode >= 27 && e.keyCode <= 57) || 
                [16, 32, 8, 189, 187, 188, 
                190, 219, 221, 220].includes(e.keyCode))
             ) {

            e.preventDefault();
            };
            if (e.keyCode == 13) {submit_calc_input()}       
        }
);

$('.calc_button').click(function() {
    var current_value = $('.calc_input').val();
    var button_value = $(this).attr('value');
    if (button_value == 'del') {
        $('.calc_input').val(current_value.substring(0, current_value.length - 1))
    } 
    else if (button_value == 'AC') {
        $('.calc_input').val('')
    } 
    else if (button_value == '=') {
        submit_calc_input();
    }
    else {
        $('.calc_input').val(current_value.concat(button_value))
    }
}); 

        

