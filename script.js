$(document).ready(function () {

  /* PAGE FADE IN */
  $("body").hide().fadeIn(800);

  /* SMOOTH PAGE TRANSITION */
  $("a").click(function (e) {
    const link = $(this).attr("href");

    if (
      !link ||
      link.startsWith("#") ||
      link.startsWith("javascript:") ||
      $(this).attr("target") === "_blank"
    ) {
      return;
    }

    e.preventDefault();

    $("body").fadeOut(500, function () {
      window.location.href = link;
    });
  });

  /* COOKIE POPUP */
  const consent = localStorage.getItem("cookieConsent");

  if (!consent) {
    $("#cookie-popup").css("display", "flex");
  }

  $("#accept-cookies").click(function () {
    localStorage.setItem("cookieConsent", "accepted");
    $("#cookie-popup").hide();
  });

  $("#decline-cookies").click(function () {
    localStorage.setItem("cookieConsent", "declined");
    $("#cookie-popup").hide();
  });

});