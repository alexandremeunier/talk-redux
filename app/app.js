export default {
  init() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      controls: false,
      progress: true,
      history: true,
      center: true,

      transition: 'linear',

      dependencies: [{
        src: 'js/classList.js',
        condition: () => {
          return !document.body.classList;
        }
      }, {
        src: 'js/highlight.js',
        async: true,
        callback: function() { hljs.initHighlightingOnLoad(); }
      },
      // Speaker notes
      { src: 'js/notes.js', async: true }]
    });
  }
};