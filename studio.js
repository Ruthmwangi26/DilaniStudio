$(document).ready(() => {
  $(".image-what1").click(() => {
    $(".design").toggle();
  });

  $(".image-what2").click(() => {
    $(".development").toggle();
  });

  $(".image-what3").click(() => {
    $(".product").toggle();
  });

  $("#image-hover").hover(() => {
    $(".hover-portflio");
  });
  // what we do
  $("#design").click(() => {
    $("#design-showing").toggle();
    $(".hide-design-icon").toggle();
  });

  $("#development").click(() => {
    $("#development-showing").toggle();
    $(".hide-dev-icon").toggle();
  });

  $("#product-management").click(() => {
    $("#product-showing").toggle();
    $(".hide-product-icon").toggle();
  });

  // portfolio
  $(".hover").hover(
    () => {
      $(".hover").css("opacity", "1");
    },
    () => {
      $(".hover").css("opacity", "0");
    }
  );
  $(".hover1").hover(
    () => {
      $(".hover1").css("opacity", "1");
    },
    () => {
      $(".hover1").css("opacity", "0");
    }
  );

  $(".hover2").hover(
    () => {
      $(".hover2").css("opacity", "1");
    },
    () => {
      $(".hover2").css("opacity", "0");
    }
  );

  $(".hover3").hover(
    () => {
      $(".hover3").css("opacity", "1");
    },
    () => {
      $(".hover3").css("opacity", "0");
    }
  );

  $(".hover4").hover(
    () => {
      $(".hover4").css("opacity", "1");
    },
    () => {
      $(".hover4").css("opacity", "0");
    }
  );

  $(".hover5").hover(
    () => {
      $(".hover5").css("opacity", "1");
    },
    () => {
      $(".hover5").css("opacity", "0");
    }
  );

  $(".hover6").hover(
    () => {
      $(".hover6").css("opacity", "1");
    },
    () => {
      $(".hover6").css("opacity", "0");
    }
  );

  $(".hover7").hover(
    () => {
      $(".hover7").css("opacity", "1");
    },
    () => {
      $(".hover7").css("opacity", "0");
    }
  );
  // submit Function

  $("#submit").click(() => {
    var nameValue = $("#name").val();
    var emailValue = $("#email").val();
    var textValue = $("#textarea").val();

    if (nameValue == "" || emailValue == "" || textValue == "") {
      alert("Please enter all the information");
    } else {
      alert("Congratulations, we have received your details");
    }
  });
});
