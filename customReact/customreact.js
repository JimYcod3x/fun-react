function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.childen
  // domElement.setAttribute("href", reactElement.props.href)
  // domElement.setAttribute("target", reactElement.props.target)
  // container.appendChild(domElement)
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === "children") continue
    domElement.setAttribute(prop, reactElement.props[prop])
  } 
  container.appendChild(domElement)
}

function myRender(reactElement, container) {
  const domELement = document.createElement(reactElement.type)
  domELement.innerText =reactElement.children
  for (prop in reactElement.props) {
    if (prop === "children") continue
    domELement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domELement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root")

myRender(reactElement, mainContainer)