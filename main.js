const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
};

ScrollReveal().reveal(".header_icons", {
    ...scrollRevealOptions,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOptions,
    delay: 500
});

ScrollReveal().reveal(".header_container a", {
    ...scrollRevealOptions,
    delay: 1000
});

ScrollReveal().reveal(".header_container .crew h4", {
    ...scrollRevealOptions,
    delay: 1500,
}); 