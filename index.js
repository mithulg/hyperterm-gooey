const backgroundColor = '#282c34'
const foregroundColor = '#abb2bf'
const borderColor = backgroundColor

const colors = {
  black       : backgroundColor,
  red         : '#eb6e81', // red
  green       : '#83f7d6', // green
  yellow      : '#a2a1f8', // yellow
  blue        : '#508ae1', // blue
  magenta     : '#de53cf', // pink
  cyan        : '#33d6e0', // cyan
  white       : '#9faac1', // light gray
  lightBlack  : '#788194', // medium gray
  lightRed    : '#f59ea3', // red
  lightGreen  : '#37fab4', // green
  lightYellow : '#f2ef9c', // yellow
  lightBlue   : '#83a8ed', // blue
  lightMagenta: '#f288d9', // pink
  lightCyan   : '#86edec', // cyan
  colorCubes  : '#ffffff', // white
  grayscale   : foregroundColor
}

const cursorColor = colors.green

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
        border-left-width: 2px;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: #181a1f !important;
      }
      .tab_tab {
        font-weight: 500;
        color: rgba(157, 165, 180, 0.6);
        border-width: 0 0 0 1px;
        border-image: linear-gradient(#21252b, #181a1f 1em) 0 0 0 1 stretch;
        border-style: solid;
      }
      .tab_tab:first-of-type {
        border-width: 0;
      }
      .tab_tab:hover {
        color: rgba(157, 165, 180, 0.6);
        transition: none;
      }
      .tab_tab::after {
        content: "";
        position: absolute;
        pointer-events: none;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${ colors.green  };
        opacity: 0;
        transition: opacity .16s;
        z-index: 1;
        box-shadow: 0 0 10px ${ colors.green };
        }
      .tabs_title,
      .tab_tab.tab_active {
        font-weight: 500;
        color: #d7dae0;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active,
      .tab_tab.tab_active + .tab_tab {
        border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
      }
      .tab_tab.tab_active::before {
        content: "";
        z-index: 1;
        position: absolute;
        top: 0;
        left: -1px;
        bottom: -1px;
        right: 0;
        height: inherit;
        background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
        border: 1px solid #181a1f;
        border-bottom-color: ${backgroundColor};
        border-top: 0;
      }
      .tab_tab.tab_active:last-of-type::before {
        border-right-width: 0;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tab_icon {
        display: block;
        width: 32px;
        height: 100%;
        top: 0;
        right: 0;
        transform: scale(0.35);
        transition: transform 0.4s ease, opacity 0.3s ease;
        opacity: 0;
        border-radius: 0;
        z-index: 2;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4cHgiIGhlaWdodD0iOHB4IiB2aWV3Qm94PSIwIDAgOCA4Ij4KICA8cGF0aCBkPSJNNS40MTQyMTM2NSw0LjAwMDAwMDA5IEw4LjAwNzEwNjk3LDYuNTkyODkzNDEgTDYuNTkyODkzNDEsOC4wMDcxMDY5NyBMNC4wMDAwMDAwOSw1LjQxNDIxMzY1IEwxLjQwNzEwNjc3LDguMDA3MTA2OTcgTC0wLjAwNzEwNjc5MzExLDYuNTkyODkzNDEgTDIuNTg1Nzg2NTMsNC4wMDAwMDAwOSBMLTAuMDA3MTA2NzkzMTEsMS40MDcxMDY3NyBMMS40MDcxMDY3NywtMC4wMDcxMDY3OTMxMSBMNC4wMDAwMDAwOSwyLjU4NTc4NjUzIEw2LjU5Mjg5MzQxLC0wLjAwNzEwNjc5MzExIEw4LjAwNzEwNjk3LDEuNDA3MTA2NzcgTDUuNDE0MjEzNjUsNC4wMDAwMDAwOSBaIiBmaWxsPSJyZ2IoMTU3LCAxNjUsIDE4MCkiPjwvcGF0aD4KPC9zdmc+Cg==');
        background-repeat: no-repeat;
        background-position: center;
      }
      .tab_icon:hover {
        opacity: 0.6;
        background-color: transparent;
      }
      .tab_tab.tab_active .tab_icon:hover {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4cHgiIGhlaWdodD0iOHB4IiB2aWV3Qm94PSIwIDAgOCA4Ij4KICA8cGF0aCBkPSJNNS40MTQyMTM2NSw0LjAwMDAwMDA5IEw4LjAwNzEwNjk3LDYuNTkyODkzNDEgTDYuNTkyODkzNDEsOC4wMDcxMDY5NyBMNC4wMDAwMDAwOSw1LjQxNDIxMzY1IEwxLjQwNzEwNjc3LDguMDA3MTA2OTcgTC0wLjAwNzEwNjc5MzExLDYuNTkyODkzNDEgTDIuNTg1Nzg2NTMsNC4wMDAwMDAwOSBMLTAuMDA3MTA2NzkzMTEsMS40MDcxMDY3NyBMMS40MDcxMDY3NywtMC4wMDcxMDY3OTMxMSBMNC4wMDAwMDAwOSwyLjU4NTc4NjUzIEw2LjU5Mjg5MzQxLC0wLjAwNzEwNjc5MzExIEw4LjAwNzEwNjk3LDEuNDA3MTA2NzcgTDUuNDE0MjEzNjUsNC4wMDAwMDAwOSBaIiBmaWxsPSIjODNmN2Q2Ij48L3BhdGg+Cjwvc3ZnPgo=');
        opacity: 1;
      }
      .tab_tab.tab_active .tab_icon {
        top: -1px;
        transform: scale(0.5);
        opacity: 0.5;
      }
      .tab_tab:hover .tab_icon {
        transform: scale(1);
        transition-duration: .16s;
        opacity: 0.5;
      }
      .tab_icon svg {
        display: none;
      }
    `
  })
}
