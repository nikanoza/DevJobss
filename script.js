"use strict";

const darkModeBtn = document.querySelector(".dark-mode");
const jobsContainer = document.querySelector(".jobs-countainer");

//
const containerJobs = document.querySelector(".grid-countainer");
const filterByTitle = document.querySelector(".filter-by-title");
const searchBtn = document.querySelector(".search-btn");
const alljobcard = document.querySelector(".job-card");
console.log(alljobcard);
///
const searchBtnLocation = document.querySelector(".search-btn-location");
const userInputLocation = document.querySelector(".input-user-location");
const btnFullTime = document.querySelector(".btn-fullTime");
console.log(containerJobs);
console.log(jobsContainer);
const btnLoadMore = document.querySelector(".btn-more");
///
const loadMoreContainer = document.querySelector(".load-container");
const jobsCountainerDetails = document.querySelector(
  ".jobs-countainer-description"
);
console.log(jobsCountainerDetails);
/*********************************************** */
/************************************************ */
/*************************************************** */
/*************************************************** */
/***************************************************** */
const darkMode = function () {
  const element = document.body;
  element.classList.toggle("dark-mode");
};

darkModeBtn.addEventListener("click", darkMode);

let datas;
/*
const getData = async function (jobs) {
  const res = await fetch("./data.json");
  const data = await res.json();
  datas.push(data);

  data.forEach(function (data) {
    const createJobCard = `
        <div class="job-card">
            <img class="job-logo" src="${data.logo}" />
            <p>${data.postedAt} <span>.</span> <span>${data.contract}</span></p>
            <h1>${data.position}</h1>
            <p>${data.company}</p>
            <p>${data.location}</p>
        </div>
    `;
    containerJobs.insertAdjacentHTML("afterbegin", createJobCard);
  });
};
getData();
getData(object);
*/
/*
searchBtn.addEventListener("click", function () {
  const filterByTitle = document.querySelector(".filter-by-title");
  const jobsByTitle = datas[0].find(
    (data) => data.position === filterByTitle.value
  );

  const expect = datas[0].filter((data) => data != jobsByTitle);
  containerJobs.classList.add("hidden");
  getData(jobsByTitle);

  const index = datas[0].findIndex((data) => data === jobsByTitle);
  
  ///
  const xxx = containerJobs.slice(index);
  console.log(xxx);
});
*/
/*********************************************** */
/************************************************ */
/*************************************************** */
/*************************************************** */
/***************************************************** */
/*
darkMode.forEach((mode) => mode.addEventListener("click", function () {
  document.querySelector('.body').computedStyleMap..
}));*/

///
///
const renderCountry = function (data) {
  const createJobCard = `
        <div class="job-card">
            <img class="job-logo" src="${data.logo}" />
            <p>${data.postedAt} <span>.</span> <span>${data.contract}</span></p>
            <h1>${data.position}</h1>
            <p>${data.company}</p>
            <p>${data.location}</p>
        </div>
    `;
  containerJobs.insertAdjacentHTML("afterbegin", createJobCard);
  /*.innerHTML = " ";*/
};
///
///
const getData = async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  datas = data;
  console.log(datas);

  data.forEach((data) => renderCountry(data));

  /*
  btnLoadMore.addEventListener("click", function () {
    btnLoadMore.classList.add("hidden");
    data.slice(9, data.length).forEach((data) => renderCountry(data));
  });*/
};
getData();

/*
searchBtn.addEventListener("click", function () {
  const filterByTitle = document.querySelector(".filter-by-title");
  const jobsByTitle = datas[0].find(
    (data) => data.position === filterByTitle.value
  );
  for (const data of datas[0])
    if (data === jobsByTitle) containerJobs.textContent = " ";
  renderCountry(jobsByTitle);
*/
/*
  datas[0].find(function (data) {
    data === jobsByTitle; 
    containerJobs.textContent = " ";    //containerJobs.classList.add("hidden"); ამან რატო არ იმუშავაა?
  });
  renderCountry(jobsByTitle);*/
/*
});*/
/*************************************************************************************************/
/************************************************************************************************/
/***********************************************************************************************/
/**********************************************************************************************/
/*********************************************************************************************/
/* არ იმუშავა ამ კოდმა და რატოომ  
const createFilter = function () {
  const filterByTitle = document.querySelector(".filter-by-title");
  const jobsByTitle = datas[0].find(
    (data) => data.position === filterByTitle.value
  );
  const jobsByCompany = datas[0].find(
    (data) => data.company === filterByTitle.value
  );
  console.log(jobsByCompany);

  for (const data of datas[0]) {
    if (data === jobsByTitle ?? data === jobsByCompany)
      containerJobs.textContent = " ";
  }
  renderCountry(jobsByTitle);
  renderCountry(jobsByCompany);

  
  datas[0].find(function (data) {
    data === jobsByCompany ?? data === jobsByCompany;
    containerJobs.textContent = " ";
  });
};

searchBtn.addEventListener("click", createFilter);
*/
/*************************************************************************************************/
/************************************************************************************************/
/***********************************************************************************************/
/**********************************************************************************************/
/*********************************************************************************************/
/* შევქმნათ function რომელიც მომხმარებლის input-ის ყოველი სიტყვის პირველ 
ასოს გადაქცევს uppercase-ად
*/
/*
const convertUpperCase = function (str) {
  const splited = str.split(" "); //(2) ['fron-end', 'development']
  const map = splited
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" "); // (2) ['Fron-end', 'Development']
    //join-ის შედეგი Fron-end Development

  return map;
};
console.log(convertUpperCase("fron-end development"));
*/
///
///
const convertUpperCase = function (str) {
  return str
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
};
//
const createFilterForTitle = function () {
  containerJobs.textContent = " ";
  const filterByTitle = document.querySelector(".filter-by-title").value;
  const convertedFilterByTitle = convertUpperCase(filterByTitle);
  const jobsBytitle = datas[0]
    .filter((data) => data.position === convertedFilterByTitle)
    .map((title) => renderCountry(title));
};
/////
/////
/////
const createFilterForCampany = function () {
  containerJobs.textContent = " ";
  const filterByTitle = document.querySelector(".filter-by-title").value;
  const convertedFilterByCompany = convertUpperCase(filterByTitle);
  const jobsByCompany = datas[0]
    .filter((data) => data.company === convertedFilterByCompany)
    .map((company) => renderCountry(company));
};
/////
/////
/////
/*
ამაზე ვიწვალეეეეე
const createFilterForLocation = function () {
  const userInputLocation = document.querySelector(
    ".input-user-location"
  ).value;
  const convertedUserInputLocation = convertUpperCase(userInputLocation);
  const jobsByLocation = datas[0].find(
    (data) => data.location === convertedUserInputLocation
  );
  console.log(jobsByLocation);

  for (const data of datas[0]) {
    if (data === jobsByLocation) containerJobs.textContent = " ";
  }

  for (const data of datas[0]) {
    for (const location of jobsByLocation) {
      console.log(location);
      if (data !== location) containerJobs.textContent = " ";
    }
  }

  renderCountry(jobsByLocation);
};
*/
///
///
const createFilterForLocation = function () {
  containerJobs.textContent = " ";
  const userInputLocation = document.querySelector(
    ".input-user-location"
  ).value;
  const convertedUserInputLocation = convertUpperCase(userInputLocation);
  const jobsByLocation = datas[0]
    .filter((data) => data.location === convertedUserInputLocation)
    .map((location) => renderCountry(location));
};
////
////
////
const createFilterFullTime = function () {
  containerJobs.textContent = " ";
  const inputFullTime = document.querySelector(".input-fullTime");

  const jobsFullTime = datas[0]
    .filter((data) => data.contract === "Full Time")
    .map((jobs) => renderCountry(jobs));
};
///
///
searchBtn.addEventListener("click", createFilterForTitle);
searchBtn.addEventListener("click", createFilterForCampany);
searchBtnLocation.addEventListener("click", createFilterForLocation);
btnFullTime.addEventListener("click", createFilterFullTime);
/*************************************************************************************************/
/************************************************************************************************/
/***********************************************************************************************/
/**********************************************************************************************/
/*********************************************************************************************/
const jobsDescription = document.querySelector(".jobs-description-container");

const eee = {
  id: 2,
  company: "Blogr",
  logo: "./assets/logos/blogr.svg",
  logoBackground: "hsl(12, 79%, 52%)",
  position: "Haskell and PureScript Dev",
};

const renderJobDescription = function (datas) {
  const html = `
  <div class="countainer">
            <div class="job-description">
              <img class="job-logo-detail"src="${datas.logo}"> 
              <div class="about-company">
                <h1 class="header">${datas.company}</h1>
                <p class="company-site">${datas.website}</p>
              </div>
              <a href="#" class="btn">${datas.website}</a> 
            </div>
            <div class="container">
              <div class="about-job">
                <p>${datas.postedAt} <span>.</span> <span>${datas.contract}</span></p>
                <h2 class="header-primary">Senior Software Engineer</h2>
                <p>United Kingdom</p>
              </div>
              <div>
                <a href="#" class="btn">Apply now</a> 
              </div>
            </div>
            <div class="jobs-requirement">
              <p class="job-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Animi asperiores quasi iusto quibusdam beatae dolorem atque velit iure repellendus labore laborum deserunt nulla obcaecati, 
                tempore repellat ad vero. Consequuntur, molestias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea eaque, cupiditate eius maiores vel aliquid eligendi possimus doloribus accusantium? Modi tenetur odio perspiciatis unde eius sit aperiam dolore et.
              </p>
              <h3>Requirements</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum natus, repellendus ratione, omnis, doloribus iste beatae magni nostrum ea provident itaque corrupti neque sequi adipisci amet ad! Exercitationem, deserunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat in eum odit ipsum, aut explicabo nihil impedit dicta dolorum, minima, error commodi atque. Inventore dolore aliquam voluptatem magni sequi.
              </p>
              <h3>What You Will Do</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quisquam aspernatur. Quae libero reiciendis obcaecati rem a voluptatem, amet accusamus et quia dolorum totam modi, quas voluptate ab suscipit? Aut.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tenetur distinctio, officia autem veniam vel, consequuntur cum voluptatum, iste corrupti sunt repellat voluptatibus eaque nobis illo animi? Vitae, dolorem? Veniam?
              </p>
            </div>
          </div>`;
  jobsDescription.insertAdjacentHTML("afterbegin", html);
};
renderJobDescription(eee);
////
////
containerJobs.addEventListener("click", function (e) {
  console.log(e);
});
