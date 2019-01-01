const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css?family=Lora:400i|Roboto:300,400';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const Roboto = new FontFaceObserver('Roboto');
  const Lora = new FontFaceObserver('Lora');

  Promise.all([Roboto.load(), Lora.load()]).then(() => {
    document.documentElement.classList.add('Roboto');
    document.documentElement.classList.add('Lora');
  });
};

export default Fonts;
