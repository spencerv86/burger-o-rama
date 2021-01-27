$(function () {
    $(".change-hunger").on("click", function(event) {
        const id = $(this).data("id");
        const hunger = $(this).data("hunger");
        // console.log(id);
        // console.log(hunger);

        const hungerState = {
            devoured: hunger,
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: hungerState,
        }).then(function () {
            location.reload();
        });
    });

    $("#add-bgr").on("click", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#bgr").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function() {
            console.log("Ordered new burger");
            location.reload();
        });
    });
});