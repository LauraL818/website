$(function(){
  var $about = $("#about")
  var $projects = $("#projects")
  var $contact = $("#contact")
  var $home = $("#home")
  var $aboutPage = $(".about")
  var $projectsPage = $(".projects")
  var $contactPage = $(".contact")
  var $homePage = $(".home")

/////////////////////HIDE ON PAGE LOAD///////////////////////////////
  $aboutPage.hide()
  $projectsPage.hide()
  $contactPage.hide()

/////////////////////FUNCTION FOR TYPING NAME/////////////////////////
  setTimeout(
    function(){
      $(".name").typed({
            strings: ["LAURA ^500 LEONARD"],
            typeSpeed: 50
        })}, 600)

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
