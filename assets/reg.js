
const str = $('#contact_form input[name=email]').val().trim();
const correct = str.length >= 6    // минимальная длина для точки, собаки, домена + по букве между ними 
           && str.includes('@')    // есть собака
           && str.includes('.');   // есть точка