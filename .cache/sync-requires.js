const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/404.js"))),
  "component---src-pages-batata-no-cone-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/batata-no-cone.js"))),
  "component---src-pages-bebidas-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/bebidas.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/index.js"))),
  "component---src-pages-milho-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/milho.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/order.js"))),
  "component---src-pages-pastel-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/pastel.js"))),
  "component---src-pages-pipoca-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/pipoca.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/home/gabriel/dec/delicias-do-tchelo/src/pages/search.js")))
}

