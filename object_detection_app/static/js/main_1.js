function predictDemo(input) {
    console.log('Starting prediction...' + input.src);
            // Show loading animation
        //$(this).hide();
        $('.loader').show();

        //
        $('#status_info').fadeIn(600);
        $('#status_info').text('Realizando detección...');

        $('#btn-predict').prop("disabled",true);        
}

$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    $('#image_info').hide();
    $('#size_info').hide();
    $('#status_info').hide();

    $('#girasol_count').hide();
    $('#maiz_count').hide();
    //$('.image-display').hide();
   
    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //$('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                //$('#imagePreview').hide();
                //$('#imagePreview').fadeIn(650);

                //$('#image').css('background-image', 'url(' + e.target.result + ')');
                $("#image").attr('src', e.target.result);
                $('#image').hide();
                $('#image').fadeIn(650);
                //
                $('#image_info').fadeIn(600);
                $('#image_info').text('Archivo seleccionado: 120_2.jpg');
                $('#size_info').fadeIn(600);
                $('#size_info').text('Tamaño: 1536x1536');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        //$('#btn-predict').show();
        //$('.image-display').show();
        $('#btn-predict').prop("disabled",false);
        $('#result').text('');
        $('#result').hide();

        $('#image_info').text('');
        $('#image_info').hide();
        $('#size_info').text('');
        $('#size_info').hide();

        $('#girasol_count').text('');
        $('#girasol_count').hide();
        $('#maiz_count').text('');
        $('#maiz_count').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        console.log('Starting prediction...');
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        //$(this).hide();
        $('.loader').show();

        //
        $('#status_info').fadeIn(600);
        $('#status_info').text('Realizando detección...');

        $('#btn-predict').prop("disabled",true);

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                console.log('Data: '+data['count']+' '+data['name']);
                console.log('Original path: ' + data['orig_path']);
                console.log('Edited path: ' + data['edited_path']);
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                //$('#result').text(' Resultado:  ' + data);
                $('#result').text(' Resultado:  ' + data['count'] + ' elementos');
                //
                $('#status_info').fadeIn(600);
                $('#status_info').text('Detección finalizada!');
                //
                $('#girasol_count').fadeIn(600);
                $('#girasol_count').text(' Girasol:  ' + data['count'] + ' elementos');
                $('#maiz_count').fadeIn(600);
                $('#maiz_count').text(' Maiz:  ' + data['count'] + ' elementos');
                //
                $('#image').fadeIn(600);
                //$("#image").attr('src', '/static/images/cows.jpg');
                //$("#image").attr('src', '/static/'+data['path']);
                $("#image").attr('src', data['edited_path']);
                //$("#image").attr('src', "{{ url_for('static', filename='images/cows.jpg') }}");
                console.log('Success!');
            },
        });
    });

    $('#img-test1').click(function () {
        console.log('Image clicked');
    });

});
