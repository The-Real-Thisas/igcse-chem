export default {
  repository: 'https://github.com/The-Real-Thisas/igcse-chem',
  titleSuffix: ' – IGCSE Chem',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">IGCSE</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Chemistry
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="IGCSE | Chemistry" />
      <meta name="og:description" content="IGCSE | Chemistry" />
      <meta name="twitter:card" content="IGCSE | Chemistry" />
      <meta name="twitter:image" content="https://igcse-chem.vercel.app/demo.png" />
      <meta name="twitter:site:domain" content="https://igcse-chem.vercel.app" />
      <meta name="twitter:url" content="https://igcse-chem.vercel.app" />
      <meta name="og:title" content="IGCSE | Chemistry" />
      <meta name="og:image" content="https://igcse-chem.vercel.app/demo.png" />
      <meta name="apple-mobile-web-app-title" content="IGCSE | Chem" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Thisas.</>
}
