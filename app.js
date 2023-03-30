import express from "express";

const app = express();

app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js";

import { loginConfig,
  addNewSectionConfig,
  developmentEnvConfig,
  javascriptBasicsConfig,
  aSimpleAPIConfig,
  importsConfig,
  simpleWebServerConfig,
  frontpageConfig,
  fetchConfig
  } from "./util/configs.js"





templateEngine.initLinks([
  developmentEnvConfig,
  javascriptBasicsConfig,
  aSimpleAPIConfig,
  importsConfig,
  simpleWebServerConfig,
  fetchConfig

  
]);





const login = templateEngine.readPage(loginConfig.path)
const loginPage = templateEngine.renderPage(login, loginConfig)


const addNewSection = templateEngine.readPage(addNewSectionConfig.path)
const addNewSectionPage = templateEngine.renderPage(addNewSection, addNewSectionConfig)

const developmentEnv = templateEngine.readPage(developmentEnvConfig.path);
const developmentEnvPage = templateEngine.renderPage(developmentEnv,developmentEnvConfig);

const javascriptBasics = templateEngine.readPage(javascriptBasicsConfig.path);
const javascriptBasicsPage = templateEngine.renderPage( javascriptBasics, javascriptBasicsConfig);

const aSimpleAPI = templateEngine.readPage(aSimpleAPIConfig.path);

const aSimpleAPIPage = templateEngine.renderPage(aSimpleAPI, aSimpleAPIConfig);

const simpleWebServer = templateEngine.readPage(simpleWebServerConfig.path);
const simpleWebServerPage = templateEngine.renderPage( simpleWebServer, simpleWebServerConfig);

const imports = templateEngine.readPage(importsConfig.path)
const importsPage = templateEngine.renderPage(imports)

const fetch = templateEngine.readPage(fetchConfig.path)
const fetchPage = templateEngine.renderPage(fetch)

const frontpage = templateEngine.readPage(frontpageConfig.path);
const frontpagePage = templateEngine.renderFrontPage(frontpage, frontpageConfig);




app.get(frontpageConfig.redirectionLink, (req, res) => {
  res.send(frontpagePage);
});

app.get(loginConfig.redirectionLink, (req, res) =>{
  res.send(loginPage)
})

app.get(addNewSectionConfig.redirectionLink, (req, res) =>{
  res.send(addNewSectionPage)
})

app.get(developmentEnvConfig.redirectionLink, (req, res) => {
  res.send(developmentEnvPage);
});

app.get(javascriptBasicsConfig.redirectionLink, (req, res) => {
  res.send(javascriptBasicsPage);
});

app.get(aSimpleAPIConfig.redirectionLink, (req, res) => {
  res.send(aSimpleAPIPage);
});

app.get(simpleWebServerConfig.redirectionLink, (req, res) => {
  res.send(simpleWebServerPage);
});

app.get(importsConfig.redirectionLink, (req, res) =>{
  res.send(importsPage)
})

app.get(fetchConfig.redirectionLink, (req, res) =>{
  res.send(fetchPage)
})

app.get("/logout", (req, res) =>{
  res.sendFile(process.cwd() + "/public/pages/logout/logout.html")
})


const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is now running on port ", port);
});
