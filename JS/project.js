//Projects loop

var Projects =
[
  {
    imgSrc: "assets/images/signLine.png", Name: "Sign Line",
    flag: "assets/images/fr.png ", start: " 3/20/2019", end: "8/13/2019", client: "SignLine",
    type: "Web Application", country: "France", clicked: false, href: "http://signline.fr/"
  },
  {
    imgSrc: "assets/images/faceJob.png", Name: "Face Job",
    flag: "assets/images/germany.png ", start: " 8/30/2019", end: "10/1/2019", client: "Face Job",
    type: "Web Application", country: " Germany", clicked: false, href: "http://face-jobs.com/"
  },
  {
    imgSrc: "assets/images/bringo.png", Name: " Bringo Trip",
    flag: "assets/images/sa.png ", start: " 3/20/2019", end: "8/13/2019", client: " Bringo Trip",
    type: "Web Application", country: "Saudi Arabia", clicked: false, href: "https://bringotrip.com/"
  },
  {
    imgSrc: "assets/images/hymalaya.jpg", Name: "Hymalaya",
    flag: "assets/images/iraq.png ", start: "5/1/2020", end: "5/1/2020", client: "hymalaya",
    type: "Web Application", country: "iraq", clicked: false, href: ""
  },
  {
    imgSrc: "assets/images/7puff.jpg", Name: "7Puff",
    flag: "assets/images/us.png ", start: "5/1/2020", end: "5/1/2020", client: "Mr. shady",
    type: "Web Application", country: "America", clicked: false, href: ""
  },
  {
    imgSrc: "assets/images/xedg.png", Name: "X.EDGE",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "X.EDGE",
    type: "Web Application", country: "Egypt", clicked: false, href: "http://www.xedge1.com/"
  },
  {
    imgSrc: "assets/images/ug.png", Name: "United Group",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "United Group",
    type: "Web Application", country: "Egypt", clicked: false, href: "http://pixelserver-001-site13.ctempurl.com/"
  },
  {
    imgSrc: "assets/images/galal.png", Name: "Galal Pharma",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "Galal Pharma",
    type: "Web Application", country: "Egypt", clicked: false, href: "http://galal-pharma.com/"
  },
 
  {
    imgSrc: "assets/images/key.png", Name: "The Key",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "Pixel",
    type: "Web Application", country: "Egypt", clicked: false, href: "https://egy-key.com/"
  },
 
  {
    imgSrc: "assets/images/Romi.png", Name: "Romi Labs",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "Romi Labs",
    type: "Web Application", country: "Egypt", clicked: false, href: "http://romilabs-eg.com/"
  },
  {
    imgSrc: "assets/images/mor.png", Name: "المر لتجاره العلف",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "",
    type: "Web Application", country: "Egypt", clicked: false, href: "http://elmor-eg.com/"
  },
  {
    imgSrc: "assets/images/Acc.png", Name: "اتحاد المحاسبين القانونيين",
    flag: "assets/images/eg.png ", start: " 3/20/2019", end: "8/13/2019", client: "",
    type: "Web Application", country: "Egypt", clicked: false, href: "http://pixelserver-001-site62.ctempurl.com/"
  },


]
var id ="index"
var id2="id"
var tempPojects = "";
for (let project of Projects) {
 tempPojects +=
  `
  <div class="col-md-6 col-lg-4  mt-4">
  <div class="card">
      <div class="card-content">
          <img src="${project.imgSrc}" class="card-img-top">
          <div class="card-body">
              <p class="card-text d-inline">${project.Name}</p><img src="${project.flag}"
                  class="flag"> <br>
              <div class="btns mt-3">
                  <a class="Demo" href="${project.href}">Demo</a> <button id=${id}
                    onclick="clicked('${id}', '${id2}')"  class="more">More</button>
              </div>
          </div>
          <ul class="moreBtn" id='${id2}'>
              <li> <i class="fa fa-calendar" aria-hidden="true"></i>Start Date:<span>
                      ${project.start}</span></li>
              <li> <i class="fa fa-calendar" aria-hidden="true"></i>End Date:<span>
                      ${project.end}</span></li>
              <li> <i class="fa fa-user" aria-hidden="true"></i>Client Name:<span>
                      ${project.client}</span></li>
              <li><i class="far fa-dot-circle" aria-hidden="true"></i>Type:<span>
                      ${project.type}</span></li>
              <li> <i class="far fa-dot-circle"
                      aria-hidden="true"></i>Country:<span>${project.country}</span></li>
              <div class="des">


              </div>
          </ul>
      </div>
  </div>
</div>
 `;
id = id+1
id2 = id2+1
}
console.log(id)
document.getElementById("projectsContainer").innerHTML = tempPojects;




function clicked(id ,id2)
{
    if(document.getElementById(id).innerHTML=="More")
    {
        document.getElementById(id).innerHTML="Less";
        document.getElementById(id2).style.display="block"
      
    }
    else if (document.getElementById(id).innerHTML=="Less")
    {
        document.getElementById(id).innerText="More"
        document.getElementById(id2).style.display="none"
    }
    
}


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};



