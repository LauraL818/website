$(function(){
  var $about = $(".about-button")
  var $projects = $(".projects-button")
  var $contact = $(".contact-button")
  var $home = $(".home-button")
  var $aboutPage = $(".about")
  var $projectsPage = $(".projects")
  var $contactPage = $(".contact")
  var $homePage = $(".home")
  var $all = $('.all')
  var $one = $('#one')
  var $two = $('#two')
  var $three = $('#three')
  var $four = $('#four')
  var $allButton = $('#all-button')
  var $oneButton = $('#one-button')
  var $twoButton = $('#two-button')
  var $threeButton = $('#three-button')
  var $fourButton = $('#four-button')
  var $oneDescription = $('.one-description')
  var $twoDescription = $('.two-description')
  var $threeDescription = $('.three-description')
  var $fourDescription = $('.four-description')

/////////////////////HIDE ON PAGE LOAD///////////////////////////////
  $aboutPage.hide()
  $projectsPage.hide()
  $contactPage.hide()
  $oneDescription.hide()
  $twoDescription.hide()
  $threeDescription.hide()
  $fourDescription.hide()

/////////////////////FUNCTION FOR TYPING NAME/////////////////////////
  setTimeout(
    function(){
      $(".name").typed({
            strings: ["LAURA ^500 LEONARD"],
            typeSpeed: 50,
            showCursor: false
        })}, 600)

/////////////////////FUNCTION FOR TYPING PORTFOLIO/////////////////////////
      $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset
      var scroll_pos_test = $('#main-jumbo').height()

      if(y_scroll_pos > scroll_pos_test) {
        $(".port").typed({
              strings: ["PORTFOLIO"],
              typeSpeed: 150,
              showCursor: false
          })
      }
  })

/////////////////////FUNCTIONS FOR SHOWING AND HIDING/////////////////////
  $about.click(function(){
    $aboutPage.show()
    $projectsPage.hide()
    $contactPage.hide()
    $homePage.hide()
  })

  $projects.click(function(){
    $projectsPage.show()
    $aboutPage.hide()
    $contactPage.hide()
    $homePage.hide()
  })

  $contact.click(function(){
    $contactPage.show()
    $aboutPage.hide()
    $projectsPage.hide()
    $homePage.hide()
  })

  $home.click(function(){
    $homePage.show()
    $aboutPage.hide()
    $projectsPage.hide()
    $contactPage.hide()
  })


})
