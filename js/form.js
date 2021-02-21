class form{

    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(490, 0);

        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');

        input.position(500, 160);
        button.position(560, 200);

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var Name = input.value();

            PlayerCount == 1;
            player.update(Name);

            player.updateCount(PlayerCount);

            greeting.html("Hello " + Name + "!");

            greeting.position(130, 160);

        });
    }


}
