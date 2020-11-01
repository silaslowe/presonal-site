export const Project = (projObj) => {
  //   const { img, title, gitLink, siteLink } = projObj
  return `
  <div class="projectCard">
  <a href="${projObj.siteLink}">
  <h3 class="projectCard__header">${projObj.title}</h3>
  <div class="projectCard__body" style="background-image: url('${projObj.img}');">
  </div>
  </a>
  <p class="projectCard__footer"><a href="${projObj.gitLink}">${projObj.gitLink}</a></p>
  </div> 
  `
}
