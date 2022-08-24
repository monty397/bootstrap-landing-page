// jQuery for fade in of contact and education.
$(document).ready(function() {
    $("#show1").click(function() {
        $("#fade1").fadeIn(1000);
        $("#show2").show();
        $("#hide1").show();
    });
});

// jQuery for fade in of about Akhil.
$(document).ready(function() {
    $("#show2").click(function() {
        $("#fade2").fadeIn(1000);
        $("#hide2").show();
    });
});

// jQuery for fade out of contact and education.
$(document).ready(function() {
    $("#hide1").click(function() {
        $("#fade1").fadeOut(1000);
        $("#hide1").hide();
    })
})

// jQuery for fade out of about Akhil.
$(document).ready(function() {
    $("#hide2").click(function() {
        $("#fade2").fadeOut(1000);
        $("#hide2").hide();
        $("#show2").hide();
    })
})

// dark mode toggle.
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}