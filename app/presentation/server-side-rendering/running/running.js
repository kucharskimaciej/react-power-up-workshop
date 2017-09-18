/** PUBLIC/INDEX.HTML **/

// before
<div id="root"></div>

// now
<div id="root">{{SSR}}</div>


/** CONSOLE **/
npm run build
NODE_ENV=production node ssr
