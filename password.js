<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HideShow</title>
</head>
<body>
    <input type="password" id="pass">
    <input type="checkbox" onclick="showPassword()" > <span id="show">Show Password</span>

    <script>
        function showPassword() {
            var click = document.getElementById('pass');

            if(click.type === "password"){
                click.type = "text";
                document.getElementById("show").innerHTML = "Hide Password";
            } else {
                click.type = "password";
                document.getElementById("show").innerHTML = "Show Password";
            }
        }
    </script>
</body>
</html>
