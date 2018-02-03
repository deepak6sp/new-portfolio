/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({ body }) => `
  <!doctype html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1,
      maximum-scale=1,user-scalable=no,minimal-ui" />
      <title>Deepak Pixel Brand | Deepak Prakash Portfolio | UX and Full Stack Developer Melbourne, Australia</title>
      <meta name="description" content="I’m a freelance UX and Front end / Full Stack developer
      with 5+ years of professional experience, based in Melbourne, Australia.">
      <meta name="keywords" content="ux wireframe and prototying, front-end developer, full Stack developer,
      web developer, melbourne front end developer, portfolio, front-end developer portfolio, full Stack developer portfolio">
      <link rel="icon" href="./images/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" type="text/css" href="/style.css"/>
  </head>
  <body>
      <div id="main">${body} </div>


      <!-- deffered js -->
      <script async type="text/javascript" src="/bundle.js"> </script>

  </body>
  </html>
`;

export default Html;
