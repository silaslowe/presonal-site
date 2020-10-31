import { renderHeader } from "./header.js"
import { ProjectList } from "./projects/ProjectList.js"
import { quoteList } from "./quotes/quoteList.js"

quoteList()
setInterval(quoteList, 10000)
// setTimeout(setInterval(quoteList, 5000), 5000)
renderHeader()
ProjectList()
