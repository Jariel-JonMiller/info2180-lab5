$(document).ready(function() {
    $("button").click(function () {
        alert("Hey");
        /*fetch("world.php")
        .then(res => res.text())
        .then(data => console.log(data));
        alert(res);*/

        //($("#lookup").html(data));
        //var my_variable_name = <?php echo(json_encode($php_string)); ?>;
        /*$.get("world.php", function(data, status){
            //($("#test").html(data));
            alert("HELLOO");
        })*/
    });
});


/*
$(document).ready(function() {
    $("input").keyup(function () {
        var heroName = $("input").val();
        $.post("superheroes.php", {
            Superhero: heroName
        }, function(data, status){
            ($("#set").html(data));
            //alert("HELLO"); 
        });
    });
});
*/