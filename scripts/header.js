const contentTarget = document.querySelector("#header")

export const renderHeader = () => {
  contentTarget.innerHTML = `
        <h1>Silas Lowe</h1>
        <p class="header__title">Developer</p>
        <div class="header__bottom">
        <div class="icons">
        <i class="devicon-git-plain"></i>
        <i class="devicon-html5-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-react-original"></i>
      </div>
        `
}
