# ***Covid-19 Tracker  :warning:*** 

<h1 align=center>
  <img src="assets/Banner1.png" alt="Covid-19 Tracker Banner"/>
</h1>

<div align=center>

![MIT][mit] ![Node_Badge][node_version_badge] ![Npm_Badge][npm_version_badge] ![React_Badge][web_react_badge] [![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&labelColor=007ACC)](https://github.com/ellerbrock/typescript-badges/)
  
  <a href="https://www.linkedin.com/in/luiz-carlos-vilela" target="_blank"> 
    <img src="https://img.shields.io/badge/Developer-Luiz%20Carlos-brightgreen?style=flat&logo=Linkedin&logoColor=white" alt="Developer link" />
  </a>
</div>

<h3 align=center>
  
:books:
***Covid-19 Tracker*** é um projeto web que demonstra no mapa o status atual de todos os países no mundo em relação ao COVID-19, além de informar o ranking de casos por estados no Brasil, fazendo o desenvolvimento front-end com as tecnologias ***TypeScript, Node, ReactJS e Material-UI***.
</h3>

<h2 align=center>
  <i>Tela Web </i> :pager:
</h2>

<h3 align=center>
  <img src="assets/home.gif" alt="Home web"/>
</h3>

<br /><br />

<h2 align=center>
  <i>Tela Mobile </i> :iphone:
</h2>

<h3 align=center>
  <img src="assets/mobile.gif" alt="Home mobile"/>
</h3>

<br />

## ***:rocket: OBJETIVO***

<p align=justify> 
  Projeto tem como principal objetivo mostrar a atual situação dos casos do vírus covid-19 de todos os países no mundo em um formato de mapa personalizado, além de motrar o ranking de casos dos estados brasileiros, e também tem a opção de buscar os dados de determinado estado em relção ao COVID-19. Além de desenvolver conhecimento na linguagem <strong>typescript</strong> e na biblioteca <strong>ReactJS</strong>, em meio ao desenvolvimento conseguir aprender e além de praticar o uso da biblioteca <strong>Material-UI</strong>. Os dados do projeto vem de uma <a src="https://coronavirus-19-api.herokuapp.com/tabs/tab1">API</a> com dados oficiais sobre o novo vírus COVID-19.
</p>

## ***:computer: TECNOLOGIAS***

#### ***:pager: Website ([React][react] + [TypeScript][typescript])***

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Material-UI][material_ui]**

  Arquivo json do fron-end do webSite <kbd>[Package.json](./package.json)</kbd>

#### ***Utilitários***

- Editor: **[Visual Studio Code][vscode]**;
- API ( Word ): **[API](https://disease.sh/v3/covid-19/countries)**;
- API-2 ( Brazil ): **[API](https://disease.sh/v3/covid-19/countries/brazil)**;

## ***:wine_glass: COMO UTILIZAR***

### ***Configurações Iniciais***

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React** de forma global, utilizando os comandos:

```sh
# React:
$ npm install create-react-app -g

```

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```
Exemplos:
```sh
# Instalando as dependências do website:
$ cd ./covidmap
$ npm install

```
Veja os arquivos **`package.json`** no <kbd>[Package.json](./package.json)</kbd>.

### ***Utilizando o Website***

```sh
# Executando o website no modo de desenvolvimento:
$ npm run start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

## ***:books: REFERÊNCIAS***

- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Node](https://nodejs.org/en/)
- [Material-UI](https://material-ui.com/pt/getting-started/installation/)

## ***:page_with_curl: LICENÇA***

Este repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<i><h2 align="center">Feito com ❤️ por <a href="https://www.linkedin.com/in/luiz-carlos-vilela/">Luiz Carlos Vilela</a></h2></i>


<!-- Badges -->

[mit]: https://img.shields.io/badge/license-MIT-brightgreen

[github_issues_badge]: https://img.shields.io/github/issues/marcospbrandao/ecoleta?color=green

[repository_license_badge]: https://img.shields.io/github/license/marcospbrandao/ecoleta

[node_version_badge]: https://img.shields.io/badge/node-12.17.0-green

[npm_version_badge]: https://img.shields.io/badge/npm-6.14.4-red

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important

<!-- Techs -->

[material_ui]: https://material-ui.com/

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[vscode]: https://code.visualstudio.com/

[stackedit]: https://stackedit.io

[tsnode]: https://github.com/TypeStrong/ts-node

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
