let alleLinks = document.querySelectorAll("nav a");
let deSections = document.querySelectorAll("section");

const opties = {
  treshold: 1.0
};

const verwerkDoorsnijding = (entries, observer) => {
  entries.forEach(entry => {
    console.log(
      entry.target.parentNode.id + " doorsnijdt " + entry.isIntersecting
    );
    if (entry.isIntersecting) {
      let link = zoekBijpassendeLink("#" + entry.target.parentNode.id);
      maakActief(link);
    }
  });
};

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

deSections.forEach(section => {
  observer.observe(section.getElementsByTagName("p")[0]);
});

// functie die de class actief verwijderd uit het menu
const verwijderActief = () => {
  alleLinks.forEach(link => {
    if ((link.classList = "actief")) {
      link.classList.remove("actief");
    }
  });
};

// functie die de class actief toevoegd aan het menu
const maakActief = elem => {
  verwijderActief();
  elem.classList.add("actief");
};

alleLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    maakActief(e.target);
    window.location = e.target.href;
  });
});

const zoekBijpassendeLink = id => {
  let link = document.querySelector('nav a[href="' + id + '"]');
  return link;
};
