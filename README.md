<!-- Logo -->
<p align="center">
  <img src="https://raw.githubusercontent.com/CoconutGoodie/figma-plugin-react-vite/master/.github/assets/logo.png" height="100px" alt="Logo"/>
</p>
<h1 align="center">Figma Plugin Boilerplate: React + Vite</h1>

<!-- Slogan -->
<p align="center">
   A figma plugin boilerplate, that helps you build UIs with React!
</p>

<!-- Badges -->
<p align="center">

  <!-- Github Badges -->
  <img src="https://raw.githubusercontent.com/TheSpawnProject/TheSpawnLanguage/master/.github/assets/github-badge.png" height="20px"/>
  <a href="https://github.com/TheSpawnProject/TheSpawnLanguage/commits/master">
    <img src="https://img.shields.io/github/last-commit/TheSpawnProject/TheSpawnLanguage"/>
  </a>
  <a href="https://github.com/TheSpawnProject/TheSpawnLanguage/issues">
    <img src="https://img.shields.io/github/issues/TheSpawnProject/TheSpawnLanguage"/>
  </a>
  <a href="https://github.com/TheSpawnProject/TheSpawnLanguage/tree/master/src">
    <img src="https://img.shields.io/github/languages/code-size/TheSpawnProject/TheSpawnLanguage"/>
  </a>

  <br/>

  <!-- Support Badges -->
  <img src="https://raw.githubusercontent.com/TheSpawnProject/TheSpawnLanguage/master/.github/assets/support-badge.png" height="20px"/>
  <a href="https://discord.gg/KNxxdvN">
    <img src="https://img.shields.io/discord/610497509437210624?label=discord"/>
  </a>
  <a href="https://www.patreon.com/iGoodie">
    <img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3DiGoodie%26type%3Dpatrons"/>
  </a>
</p>

## Key Features

1. **_Logical Sides in Mind:_** Figma plugins that render a UI works on two different processes (split into code.js and index.html in Figma docs). This boilerplate keeps sides separated, by allowing them to share code (under `./src/common/`).

2. **_Intercommunitive:_** Logical sides should be able to communicate with each other without creating huge and unscalable nested if statements. This boilerplate solves it by declaring isolated messages (under `./src/common/network/messages/`)!

3. **_Easy to Build:_** Configure the vite config with your plugin credentials once, then just build with your everyday `npm run build` command! The `/dist` folder will be ready to publish already!

4. **_Bundled into One File:_** Figma plugins only accept single file for main (js) and ui (html), which makes deployment of multiple files linked to each other impossible. This boilerplate is configured to bundle/inline most of the things you need like: rasterize/vector image asset imports, css url statements and of course source code imports.

5. **_SVG as Component:_** Yes, you can import SVG's as inlined sources with `*.svg?inline`, but what about actually importing them as React components? Easy! You can import an svg file as React component with `*.svg?component`! (See `/src/ui/app.tsx` for examples)

6. **_Sassy:_** A classic, this boilerplate supports Sass/Scss/Less and modules! Check out `/src/ui/styles/` for 7-1 Sass Template and `/src/ui/components/Button.module.scss` for module examples.

## How to TODO?

TODO

<p align="center">
  <img src="https://raw.githubusercontent.com/CoconutGoodie/figma-plugin-react-vite/master/.github/assets/preview.png" alt="Preview" />
</p>
