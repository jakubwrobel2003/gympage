const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    thershold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
//////////////////////////////////////////////////////
//set current year
//////////////////////////////////////////////////////
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEL.textContent = currentYear;
//////////////////////////////////////////////////////
//Make mobile bavigation work
//////////////////////////////////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".section-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
