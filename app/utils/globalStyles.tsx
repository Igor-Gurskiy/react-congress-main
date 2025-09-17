import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Gilroy';
  }

  * {
    outline: none;
  }

  html {
    min-height: 100%;
    /* overflow: hidden; */
    min-width: 100%;
    /* leave this here */
  }

  body {
    //font-family: 'Century Gothic';
    color: #333;
    /* height: 100%; */
    line-height: 1.75em;
    background: #fff;
    /* background: #767a7b; */
    overflow: hidden;

    --size: calc(0.5vmax + 0.5vmin);
  }

  body {
    /* position: absolute; */
    /* height: 100%; */
    width: 100%;
    display: flex;
  }

  body, #__next {
    min-height: 100%;
  }

  .wrapper,
  #__next {
    flex: 1;
    margin: 0 !important;
    /* min-height: 100%; */
    position: relative;
    overflow: hidden;
  }

  html, body, #__next {
    height: 100%;
  }

  html,
  body,
  #__next {
    position: fixed;
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    //@media (orientation: landscape) and (max-height: 400px) {
    //  overflow: scroll;
    //}
  }

  @media (orientation: landscape) and (max-height: 400px) {
    #__next {
      //height: auto;
    }
  }

  //img {
  //  image-rendering: crisp-edges;
  //}

  .panorama {
    /* margin-bottom: 1.5rem; */
    /* overflow: hidden; */
    left: 0;
    width: 100%;
    height: 100% !important;
    max-height: none !important;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top center;
    will-change: transform;
    transform: translateZ(0);
    touch-action: none;

    &__frame {
      position: absolute;
      left: 0;
      top: 0;
      transform-origin: left top;
      will-change: transform;
      transform: translateZ(0);
    }

    &__image {
      will-change: transform;
      transform: translateZ(0);
      width: 2500px;
      height: 1250px;
      left: 0px;

      canvas {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        min-width: 100vw;
        height: 100%;
        min-height: 100%;
      }
    }
  }

  .help {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }


  .tag-cloud {
    flex: 1;
  }


  .tag-clouder {
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .tag-input input {
    padding: 5px;
    margin-right: 5px;
  }

  .tag-input button {
    padding: 5px 10px;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  .tag {
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .tag:hover {
    background-color: #f0f0f0;
  }

  .search-tag-select__control {
    text-transform: uppercase;
    text-align: center;
  }

  .custom-handle {
    width: 100%;
    height: 100%;
    background: blue;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0;
    transform: none;
    border: none;
    opacity: 0;
  }

  .App {
    font-family: sans-serif;
    text-align: center;
  }

  .connectPoint {
    opacity: 0.2;
  }

  .connectPoint:hover {
    opacity: 0.6;
  }


  .custom-option {
    transition: background 60ms;
  }

  .custom-option:hover {
    transition-delay: 60ms;
    background: #deebff;
  }

  .custom-option.custom-select__option--is-focused {
    background: none;
  }

  .custom-option.custom-select__option--is-selected {
    background: #2684FF;
  }

  .react-virtualized-menu-placeholder {
    margin-top: 12px;
    color: #9a9a9a;
    text-align: center;
  }

  .react-virtualized-list-wrapper li {
    list-style: none;
  }

  body {
    font-family: 'Gilroy';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-smooth: always;
    margin: 0;
    padding: 0;
  }


  .app-outer {
    position: relative;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  .app-inner {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .tag-cloud {
    flex: 1;
  }

  .tag-cloud > div {
    transition: 1.4s;
  }

  .tag-item-wrapper {
    cursor: pointer;
  }

  .tag-item-wrapper:hover {
    z-index: 100;
  }

  .tag-item-wrapper:hover .tag-item-tooltip {
    display: block;
  }

  .tag-item-tooltip {
    background: #c01916;
    color: white;
    margin-top: 5px;
    z-index: 100;
    display: none;
    padding: 15px;
    font-size: 14px;
    line-height: 1;
    position: absolute;
    min-width: 60px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  @keyframes floating {
    0%, 100% {
      transform: translateY(0) translateX(0) scale(1);
    }
    25% {
      transform: translateY(calc(-2px - var(--scale-factor) * 2px)) translateX(calc(-2px - var(--scale-factor) * 2px)) scale(calc((1 + var(--scale-factor) * 0.1)));
    }
    50% {
      transform: translateY(0) translateX(0) scale(1);
    }
    75% {
      transform: translateY(calc(2px + var(--scale-factor) * 2px)) translateX(calc(2px + var(--scale-factor) * 2px)) scale(calc((1 + var(--scale-factor) * 0.2)));
    }
  }

  @keyframes scaling {
    0%, 100% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc((1 + var(--scale-factor) * 0.1)));
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(calc((1 + var(--scale-factor) * 0.2)));
    }
  }


  @keyframes breathing {
    0% {
      opacity: 0.3;
    }

    25% {
      opacity: 1;
    }

    60% {
      opacity: 0.3;
    }

    100% {
      opacity: 0.3;
    }
  }


  .tag-cloud-text {
    animation: floating 6s ease-in-out infinite;
  }


  .wordcloud {
    display: flex;
    flex-direction: column;
    user-select: none;
  }

  .wordcloud svg {
    cursor: pointer;
  }


  .tag-cloud-text {
    //transform-origin: center;
    //--scale: 1;
    //transform: translate(var(--translateX), var(--translateY)) scale(var(--scale));
  }

  .tag-cloud-text:hover {
    //--scale: 1.2;
    //transition: transform 0.3s ease-in-out;
  }

  .cloud-tag-item {
    z-index: -1;
  }

  .cloud-tag-item:hover {
    z-index: 122;
  }

  .room-tag-cloud {
    cursor: pointer;
  }

  .room-tag-cloud:hover {
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.6)) drop-shadow(0px 5px 3px rgba(255, 255, 255, 0.6)) drop-shadow(9px 4px 4px rgba(255, 255, 255, 0.6));
  }
`

export default GlobalStyles
