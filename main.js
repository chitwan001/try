let mainCss = 'https://flynas-dev.oriserve.com/chatbot/static/css/main.fc566275.chunk.css';
let runtimeJs = 'https://flynas-dev.oriserve.com/chatbot/static/js/runtime-main.370f127b.js';
let chunkJs = 'https://flynas-dev.oriserve.com/chatbot/static/js/10.00b0c8ce.chunk.js';
let mainJs = 'https://flynas-dev.oriserve.com/chatbot/static/js/main.c471ea37.chunk.js';

function dynamicallyLoadScript(url) {
  const script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  document.head.appendChild(script);
}

function dynamicallyLoadCss(css) {
  const link = document.createElement("link");
  link.href = css;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function removeElementFromSource(tagName, attribute, value) {
  const node = document.head.querySelector(`${tagName}[${attribute}='${value}']`);
  if (node) document.head.removeChild(node);
}

function addChatbot() {
  dynamicallyLoadCss(mainCss);
  dynamicallyLoadScript(runtimeJs);
  dynamicallyLoadScript(chunkJs);
  dynamicallyLoadScript(mainJs);
}

function removeChatbot() {
  removeElementFromSource("link", "href", mainCss);
  removeElementFromSource("script", "src", runtimeJs);
  removeElementFromSource("script", "src", chunkJs);
  removeElementFromSource("script", "src", mainJs);
  const elem = document.getElementById("ori-chatbot-root");
  if(elem) document.body.removeChild(elem);
}

addChatbot()