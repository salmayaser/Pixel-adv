//Projects loop

var Projects =
[

    {imgSrc:"assets/images/makuk.png" , Name:"Cap Makuk",
    flag:"assets/images/eg.png ", start:"5/1/2020" , end:"3/3/2020", client:"Makuk",
    type:"Mobile Application", country:"Egypt", clicked:false ,apple:"https://apps.apple.com/eg/app/%D9%85%D9%83%D9%88%D9%83/id1493180002" ,play:"https://play.google.com/store/apps/details?id=apps.pixel.makok" 
   },
   {imgSrc:"assets/images/wrk.png" , Name:"Cap Makuk Workers",
   flag:"assets/images/eg.png ", start:"5/1/2020" , end:"3/3/2020", client:"Makuk",
   type:"Mobile Application", country:"Egypt", clicked:false ,apple:"https://apps.apple.com/eg/app/captin-makuk/id1496541453" ,play:"https://play.google.com/store/apps/details?id=apps.pixel.makuk.worker&hl=en_US&gl=US" 
  },
   {imgSrc:"assets/images/bzender.png" , Name:"B-zender",
   flag:"assets/images/eg.png ", start:"5/1/2020" , end:"5/1/2020", client:"B-zender",
   type:"Mobile Application", country:"Egypt", clicked:false ,apple:"https://apps.apple.com/eg/app/b-zender/id1484626788" ,play:"https://play.google.com/store/apps/details?id=apps.pixel.bzender" 
 } ,
 {imgSrc:"assets/images/theKey.png" , Name:"The Key",
 flag:"assets/images/eg.png ", start:"5/1/2020" , end:"5/1/2020", client:"Pixel",
 type:"Mobile Application", country:"Egypt", clicked:false ,apple:"https://apps.apple.com/eg/app/the-key-app/id1526635182" ,play:"https://play.google.com/store/apps/details?id=apps.pixel.the.key" 
 } ,
 {imgSrc:"assets/images/African.png" , Name:"African Cup of Nation",
 flag:"assets/images/eg.png ", start:"5/1/2020" , end:"5/1/2020", client:"Afican Cup",
 type:"Mobile Application", country:"Egypt", clicked:false ,apple:"#" ,play:"https://play.google.com/store/apps/details?id=my.egypt.k.AfricanCup2019" 
 } ,
 
 {imgSrc:"assets/images/m.png" , Name:"مؤشرات",
 flag:"assets/images/sa.png ", start:"5/1/2020" , end:"5/1/2020", client:"مؤشرات",
 type:"Mpbile Application", country:"saudi Arabia", clicked:false,apple:"#",play:"https://play.google.com/store/apps/details?id=apps.sharabash.mo2shratapp" 
 } ,
 {imgSrc:"assets/images/brigo.png" , Name:" Bringo Trip",
 flag:"assets/images/sa.png ", start:" 3/20/2019" , end:"8/13/2019", client:" Bringo Trip",
 type:"Web Application", country:"Saudi Arabia", clicked:false ,apple:"https://apps.apple.com/eg/app/bringo-trip/id1506917930", play:"https://play.google.com/store/apps/details?id=apps.pixel.bringotrip"
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
              <a class="playStore" target="_blank" href="${project.play}"><img src="assets/images/playstore.png"></a>
              <a class="playStore"  href="${project.apple}"><img src="assets/images/apple.png"></a>
              </div>

                   <button id='${id}' onclick="clicked('${id}', '${id2}')"  class="more mt-2">More</button>
              
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
document.getElementById("projectsContainer").innerHTML = tempPojects;


var links = document.getElementsByClassName("playStore")
for (let i =0 ; i< links.length ; i++)
{
    if (links[i].href.endsWith("#")==true)
    {
        links[i].addEventListener("click" , 
        function()
        {
            document.getElementById("pop").style.display="flex"
        }
        )
        
    }

}
document.getElementById("times").addEventListener("click" , function()
{
    document.getElementById("pop").style.display="none"
})

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
  

