
//wow declaration
new WOW().init();

//typed.js declaration 

var typed = new Typed('.typed-element', {
  strings: ["Sucess.", "Profilts.", "Visibility."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 0,
  startDelay: 1000,
  loop: true
});

//calling owl carousel

$(document).ready(function () {
  $(".owlProjects").owlCarousel(
    {
      items: 5,
      dots: true,
      nav: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,

        },


        400: {
          items: 1,

        },
        600:
        {
          items: 2,
        },
        1000:
        {
          items: 3,

        },
      }

    }
  );

});

//steps 

stepHeading = document.getElementById("step-heading");
stepContent = document.getElementById("step-content");

function change(i) {
  if (i == 1) {
    stepHeading.innerText = "First";
    stepContent.innerText = "Analysis"
  }
  else if (i == 2) {
    stepHeading.innerText = "Second";
    stepContent.innerText = "Financial Offer"
  }
  else if (i == 3) {
    stepHeading.innerText = "Third"
    stepContent.innerText = "Action Plan"
  }
  else if (i == 4) {
    stepHeading.innerText = "Fourth"
    stepContent.innerText = "Implementation"
  }
  else if (i == 5) {
    stepHeading.innerText = "Fifth"
    stepContent.innerText = "Follow Up And Reporting"
  }


}


$(".step-b").slideUp();

function openSection(i) {
  if (i == 1) {
    $(".step-b1").slideToggle("slow")
    $(".step-h1").toggleClass("clicked")
    $("#icon1").toggleClass("fa-chevron-right")
    $("#icon1").toggleClass("fa-caret-up")

  }
  else if (i == 2) {
    $(".step-b2").slideToggle("slow");
    $(".step-h2").toggleClass("clicked")
    $("#icon2").toggleClass("fa-chevron-right")
    $("#icon2").toggleClass("fa-caret-up")


  }
  else if (i == 3) {
    $(".step-b3").slideToggle("slow");
    $(".step-h3").toggleClass("clicked")
    $("#icon3").toggleClass("fa-chevron-right")
    $("#icon3").toggleClass("fa-caret-up")


  }
  else if (i == 4) {
    $(".step-b4").slideToggle("slow");
    $(".step-h4").toggleClass("clicked")
    $("#icon4").toggleClass("fa-chevron-right")
    $("#icon4").toggleClass("fa-caret-up")


  }
  else if (i == 5) {
    $(".step-b5").slideToggle("slow");
    $(".step-h5").toggleClass("clicked")
    $("#icon5").toggleClass("fa-chevron-right")
    $("#icon5").toggleClass("fa-caret-up")


  }



}


// Teams 

teams =
  [
    { name: "Mohamed Rady", image: 'assets/images/CEO.jpg', position: "CEO" },
    { name: "Mohamed Mabrouk", image: 'assets/images/team4.jpg', position: "Financial Manager" },
    { name: "Ahmed zaid", image: 'assets/images/team2.jpg', position: "IT Manager" },
    { name: "Islam Mohamed", image: 'assets/images/team7.jpg', position: "Developer " },
    { name: "Mohamed sharabash", image: 'assets/images/team5.jpg', position: "Android Developer" },
    { name: "Mohamed swief", image: 'assets/images/team3.jpg', position: "Backend developer " },
    { name: "Osama Ahmed", image: 'assets/images/team6.jpg', position: "Graphic Designer" }

  ]
var tempTeams = "";
for (let team of teams) {
  tempTeams += `   <div class="item" id="">
  <div class=" team-grid" >
      <div class="pic">
          <div class="stack twisted">
              <img  src="${team.image}" alt=" " >
          </div>
      </div>
      <h4>${team.name}</h4>
      <p>${team.position}</p>
     
  </div>

</div>`
}
document.getElementById("displayTeam").innerHTML = tempTeams;
$(document).ready(function () {
  $(".owlTeams").owlCarousel(
    {
      items: 5,
      dots: true,
      nav: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,

        },


        400: {
          items: 1,

        },
        600:
        {
          items: 2,
        },
        1000: {
          items: 4,

        },
      }

    }
  );

});


// clients
$(document).ready(function () {
  $(".owlClients").owlCarousel(
    {
      dots: true,
      nav: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,

        },


        600: {
          items: 4,

        },
        1000: {
          items: 5,

        },
      }

    }
  );

});


// smoth scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(document).ready(function(){
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });
}); 

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

