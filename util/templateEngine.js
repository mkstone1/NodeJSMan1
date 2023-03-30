import fs from "fs";

let allLinksHtmlNavbar = "";
let allLinksHtmlFrontPage = "";

function initLinks(links) {
  const allLinks = links.map((config) => {
    return { name: config.redirectionName, link: config.redirectionLink };
  });

  allLinksHtmlNavbar = allLinks
    .map((link) => {
      return `<a href = "${link.link}">${link.name}</a>`;
    })
    .join()
    .replaceAll(",", "");

  allLinksHtmlFrontPage = allLinks
    .map((link) => {
      return `<a href = "${link.link}" class="frontpage-link">${link.name} </a>`;
    })
    .join()
    .replaceAll(",", "");
}

function renderPage(page, config = {}) {
  const navbar = fs
    .readFileSync("./public/components/navbar/navbar.html")
    .toString()
    .replace("$TAB_TITLE", config.tabTitle || "")
    .replace("$CSS_LINK", config.cssLink || "")
    .replace("$DROPDOWNLINKS", allLinksHtmlNavbar || "");

  return navbar + page;
}

function renderFrontPage(page, config = {}) {
  const navbar = fs
    .readFileSync("./public/components/navbar/navbar.html")
    .toString()
    .replace("$TAB_TITLE", config.tabTitle || "")
    .replace("$CSS_LINK", config.cssLink || "")
    .replace("$DROPDOWNLINKS", allLinksHtmlNavbar || "");;

  page = page.replace("$FRONTPAGELINKS", allLinksHtmlFrontPage || "");

  
  return navbar + page;
}

function readPage(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

export default {
  renderPage,
  readPage,
  renderFrontPage,
  initLinks,
};
