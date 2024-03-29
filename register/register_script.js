document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    var name = document.getElementById("full-name").value;
    var phone = document.getElementById("mob-no").value;
    var password = document.getElementById("create-password").value;

    // var num = document.getElementById("mob-no").value;
    // var password = document.getElementById("password").value;



    fetch('http://127.0.0.1:8000/create_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'name': name, 'phone': phone, 'password': password}),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if( data.outcome == 'success' ) {
            window.open('../customer_page/customer_page.html', '_self');

    }
    else{
        window.open('../signup/signup.html', '_self');
    }})
    .catch(err => {
        console.log(err);
    });




});