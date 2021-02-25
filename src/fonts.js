const FontFaceObserver = require('fontfaceobserver');

const LoadFonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css?family=Lora:400i|Roboto:300,400';
  link.rel = 'stylesheet';

  if (document.head) {
    document.head.appendChild(link);
  }

  const Roboto = new FontFaceObserver('Roboto');
  const Lora = new FontFaceObserver('Lora');

  Promise.all([Roboto.load(), Lora.load()])
    .then(() => {
      if (document.documentElement) {
        document.documentElement.classList.add('fonts-loaded');
      }
    })
    .catch(() => {
      if (document.documentElement) {
        document.documentElement.classList.add('fonts-failed');
      }
    });
};

export default LoadFonts;
