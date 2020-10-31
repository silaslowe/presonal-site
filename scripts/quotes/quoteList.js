import { useEpigrams } from "./quoteProvider.js"

const quoteTarget = document.querySelector(".quotes")

export const quoteList = () => {
  let lastQuote = ""
  const quoteArray = useEpigrams()
  const rando = randomNum(quoteArray)
  let randomizedQuote = quoteArray[rando]
  render(randomizedQuote)
}

const randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const render = (quote) => {
  quoteTarget.innerHTML = `
    <div class="quoteContainer">
    <p class="quote">${quote}</p>
    <div class="attributeContainer">
    <p class="quote__author">-Alan J. Perlis</p>
    <p class="qiote__article"> "Epigrams in Programming" (September, 1982)</p>
    <div>
    `
}
