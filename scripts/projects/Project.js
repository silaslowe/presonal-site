export const Project = (projObj) => {
  //   const { img, title, gitLink, siteLink } = projObj

  return `
  <div class="projectCard">
  <a href="${projObj.siteLink}">
  <div class="projectCard__body" style="background-image: url('${projObj.img}');>
    <h3 class="projectCard__header">${projObj.title}</h3>
  </div>
  </a>
  <p class="projectCard__footer">${projObj.gitLink}</p>
  </div> 
  `
}
