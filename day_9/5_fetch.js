const fetch = require('node-fetch');

function getName()
{
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => console.log(data.results[0].name.first))
        .catch(err => console.log(err));
}


setInterval(getName, 2000);