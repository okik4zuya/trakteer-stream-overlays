class TrThemeDefault {
  name() {
    return 'default'
  }
  dependencies() {
    return {
      'js': ['https://assets.trakteer.id/js/anime.min.js'],
      'css': []
    }
  }
  font() {
    return {
      var: '--defaultFontFamily', default: 'Poppins'
    }
  }
  styles() {
    return [
      {key: `nt_1_clr1`, var: '--defaultBgStreamContent', default: '#be1e2d'},
      {key: `nt_1_clr2`, var: '--defaultColorStreamContent', default: '#fff'},
      {key: `nt_1_clr2`, var: '--defaultMessageTextShadow', default: '#fff'},
      {key: `nt_1_clr1`, var: '--defaultMessageBorder', default: '#be1e2d'},
      {key: `nt_1_clr3`, var: '--defaultMessageColor', default: '#000'},
      {key: `nt_1_clr2`, var: '--defaultMessageBackground', default: '#fff'},
      {key: `nt_1_clr1`, var: '--defaultPrimaryColor', default: '#be1e2d'},
    ]
  }
  html() {
    return `
      <div class="theme-default container">
        <div class="stream-content">
          <div class="image basic">
            <img class="unit-icon" src="">
            <div class="quantity-label"></div>
          </div>
          <div class="stream-media">
            <div class="animation"></div>
            <div class="player"></div>
          </div>
          <h1 class="message">
            <span class="text-wrapper">
              <div class="letters-1">
                <span class="supporter-name"></span> 
                <span class="action">mentraktir</span>
              </div>
              <div class="letters-2">
                <span class="quantity"></span>
                <span class="unit-name"></span>
              </div>
            </span>
          </h1>
          <div class="support-message"></div>
        </div>
      </div>
    `
  }
  // Set AnimeJS
  animate1 = null
  animate2 = null
  animate3 = null

  setup() {
    this.animate1 = anime({
      targets: '.theme-default .letters-1 > * ',
      translateY: ["1.2em", 0],
      translateZ: 0,
      duration: 750,
      autoplay: false,
      delay: (el, i) => 50 * i
    });
    this.animate2 = anime({
      targets: '.theme-default .letters-2 .letter',
      translateY: ["1.2em", 0],
      translateZ: 0,
      duration: 750,
      autoplay: false,
      delay: (el, i) => 750 + (50 * i),
    });
    this.animate3 = anime({
      targets: '.theme-default .message .letter',
      translateY: [0, "-0.25em", 0],
      translateZ: 0,
      duration: 750,
      easing: "easeOutExpo",
      loop: true,
      delay: (el, i) => 50 * i
    });
  }
  setData(data) {
    // Reset DOM
    h.setHTML('.theme-default .letters-1', '<span class="supporter-name"></span><span class="action">mentraktir</span>');
    h.setHTML('.theme-default .letters-2', '<span class="quantity"></span><span class="unit-name"></span>');

    // Set Data
    h.setHTML('.theme-default .supporter-name', h.txtOverflow(data.supporter_name, 17));
    h.setHTML('.theme-default .quantity', (data.quantity).toString());
    h.setHTML('.theme-default .quantity-label', 'x' + (data.quantity).toString());
    h.setHTML('.theme-default .unit-name', data.unit);
    h.setHTML('.theme-default .support-message', data.supporter_message || '');
    h.el('.theme-default .unit-icon').src = h.url('alias/' + h.args('hash') + '/unit');

    // For animating letters in Anime.js
    let letters1 = h.el('.theme-default .supporter-name').textContent.replace(/\S/g, "<span class='letter text-primary'>$&</span>");
    letters1 += "<span class='ml-5'></span>";
    letters1 += h.el('.theme-default .action').textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    h.setHTML('.theme-default .message .letters-1', letters1);

    let letters2 = h.el('.theme-default .quantity').textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    letters2 += "<span class='mr-7'></span>";
    letters2 += h.el('.theme-default .unit-name').textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    h.setHTML('.theme-default .message .letters-2', letters2);
  }
  addMediaStyle() {
    h.el('.theme-default').classList.add('is-media');
  }
  removeMediaStyle() {
    h.el('.theme-default').classList.remove('is-media');
  }
  mediaElements() {
    return {
      'gif': h.el('.theme-default .animation'),
      'video': h.el('.theme-default .player')
    };
  }
  async show() {
    h.setStyle('.theme-default.container', { opacity : 1 });
    h.setStyle('.theme-default .stream-content', { display : 'block' });

    this.animate1.reset();
    this.animate1.play();
    this.animate2.reset();
    this.animate2.play();
    this.animate3.play();
  }
  async hide() {
    const animate3 = this.animate3;
    const fadeOutDuration = 1000;
    return new Promise(function (resolve, reject) {
      anime({
        targets: '.theme-default.container',
        opacity: 0,
        duration: fadeOutDuration,
        easing: "easeOutExpo",
        complete: function () {
          h.setStyle('.theme-default .stream-content', { display : 'none' });
          animate3.pause();
          resolve();
        }
      });
    });
  }
}

h.setProp(window, 'tr.nt.default', new TrThemeDefault());
