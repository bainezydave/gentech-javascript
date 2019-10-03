var a = 1;

function x()
{
    console.log("Hello");
}

function y()
{
    x();
}

function z()
{
    y();
    setTimeout(function() { console.log("Executed after 5 seconds") }, 3000);
}

z();