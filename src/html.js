import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          key={"mautic"}
          id="mautic"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
              w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
              m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://marketing.obrunogermano.com/index.php/mtc.js','mt');
      
          mt('send', 'pageview');
          `,
          }}
        />
        <script
          key={"SentryCDN"}
          src="https://browser.sentry-cdn.com/5.15.5/bundle.min.js"
          integrity="sha384-wF7Jc4ZlWVxe/L8Ji3hOIBeTgo/HwFuaeEfjGmS3EXAG7Y+7Kjjr91gJpJtr+PAT"
          crossOrigin="anonymous"
        />
        <script
          key={"SentryInit"}
          id="SentryInit"
          dangerouslySetInnerHTML={{
            __html: `Sentry.init({ dsn: 'https://65e2163cb5de4d0cbd45ec944a9185de@o395640.ingest.sentry.io/5247973' });`,
          }}
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
