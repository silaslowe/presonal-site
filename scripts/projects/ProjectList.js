import { Project } from "./Project.js"

const projectTarget = document.querySelector(".projects")

const projectArray = [
  {
    img: "./pics/popcal.png",
    title: "Population Finder",
    gitLink: "https://github.com/silaslowe/Country_Pop_AJAX",
    siteLink: "https://pedantic-lumiere-729baf.netlify.app/",
  },
  {
    img: "./pics/popcal.png",
    title: "Population Finder",
    gitLink: "https://github.com/silaslowe/Country_Pop_AJAX",
    siteLink: "https://pedantic-lumiere-729baf.netlify.app/",
  },
]

export const ProjectList = () => {
  render(projectArray)
}

const render = (arr) => {
  projectTarget.innerHTML = `
  <div class="cardContainer">
  ${arr.map((project) => Project(project)).join(" ")}
  <div>
      `
}
