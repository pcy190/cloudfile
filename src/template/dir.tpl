<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            margin: 30px;
        }

        a {
            display: block;
            font-size: 30px;
        }
    </style>
</head>

<body>
    {{#each files}}
    <a href="{{../dir}}/{{this}}">{{this}}</a><br />
    {{/each}}
</body>

</html>