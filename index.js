$(function(){

  // Animation du carousel

    const $carousel = $('.carousel');
    const $images = $carousel.find('img');
    let currentImageIndex = 0;
    const totalImages = $images.length;
  
    function showImage(index) {
      $images.removeClass('active');
      $images.eq(index).addClass('active');
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      showImage(currentImageIndex);
    }
  
    let interval = setInterval(nextImage, 4000);
  
    // Arrêtez le carrousel avec le curseur de la souris 
    $carousel.on('mouseenter', function() {
      clearInterval(interval);
    });
  
    // Redémarrez le carrousel 
    $carousel.on('mouseleave', function() {
      interval = setInterval(nextImage, 4000);
    });
  
    showImage(currentImageIndex);

    // Les boutons de control du Carrousel

    const $prevButton = $('#prev-button');
    const $nextButton = $('#next-button');

    $prevButton.on('click', function() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    });

    $nextButton.on('click', function() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    });

  // Ouverture et fermeture du menu Hamburger

    const $hamburgerMenu = $('#hamburger-menu');
    const $closeMenu = $('#close-menu');
    const $sidebar = $('.sidebar');

    $hamburgerMenu.on('click', function () {
        $sidebar.addClass('active');
    });

    $closeMenu.on('click', function () {
        $sidebar.removeClass('active');
    });

})