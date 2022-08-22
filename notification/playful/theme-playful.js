class TrThemePlayful {
  name() {
    return 'playful';
  }
  dependencies() {
    return {
      'js': [],
      'css': []
    };
  }
  font() {
    return {
      var: '--playfulFontFamily', default: 'kingthings'
    }
  }
  styles() {
    return [
      {key: `nt_3_clr4`, var: '--playfulUnitIconBg', default: '#fff'},
      {key: `nt_3_clr1`, var: '--playfulUnitIconBorderLeft', default: '#be1e2d'},
      {key: `nt_3_clr1`, var: '--playfulUnitIconBorderBottom', default: '#be1e2d'},
      {key: `nt_3_clr2`, var: '--playfulStreamContentBg', default: '#fff8f8'},
      {key: `nt_3_clr1`, var: '--playfulQtyLabelBg', default: '#be1e2d'},
      {key: `nt_3_clr4`, var: '--playfulQtyLabelColor', default: '#fff'},
      {key: `nt_3_clr3`, var: '--playfulMessageColor', default: '#21122d'},
      {key: `nt_3_clr3`, var: '--playfulSupportMessageColor', default: '#21122d'},
      {key: `nt_3_clr1`, var: '--playfulSupportAvatarBorder', default: '#be1e2d'},
      {key: `nt_3_clr1`, var: '--playfulSupportAvatarBorder', default: '#be1e2d'},
    ];
  }
  html() {
    return `
      <div class="theme-playful container">
        <div class="stream-content">

          <div class="image basic">
            <img class="unit-icon" id="unit-icon" src="">
            <div class="quantity-label"></div>
          </div>

          <div class="supporter-avatar"><img src="" height="50px" width="50px"/></div>

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
          <div class="media">
            <div class="animation"></div>
            <div class="player"></div>
          </div>
          <div class="support-message"></div>

          <div class="bubbles bubbles-top">
            <div class="bubble-1"></div>
            <div class="bubble-2"></div>
            <div class="bubble-3"></div>
          </div>
        </div>
      </div>
    `;
  }
  setup() {

  }
  setData(data, setting = null) {
    h.el('.supporter-avatar > img').src = data.supporter_avatar || h.url("images/mix/default-avatar.png");
    h.setHTML('.theme-playful .quantity-label', 'x ' + (data.quantity).toString());
    h.setHTML('.theme-playful .supporter-name', h.txtOverflow(data.supporter_name, 32));
    h.setHTML('.theme-playful .quantity', (data.quantity).toString());
    h.setHTML('.theme-playful .unit-name', data.unit);
    h.setHTML('.theme-playful .support-message', data.supporter_message || '');
    if (data.supporter_message && setting) {
      let gifUrl = setting['nt_gif'] || h.args('nt_gif') || 'images/mix/love.gif';
      h.incHTML('.theme-playful .support-message', '<img src="' + (h.hasHttp(gifUrl) ? gifUrl : h.url(gifUrl)) + '" alt="">');
    }
    h.el('.theme-playful .unit-icon').src = h.url('alias/' + h.args('hash') + '/unit');
  }
  addMediaStyle() {
    h.el('.theme-playful').classList.add('is-media');
  }
  removeMediaStyle() {
    h.el('.theme-playful').classList.remove('is-media');
  }
  mediaElements() {
    return {
      'gif': h.el('.theme-playful .animation'),
      'video': h.el('.theme-playful .player')
    };
  }
  async beforeScaleOnPreview() {
    h.setStyle('.theme-playful.container', { display: 'flex' });
  }
  async show() {
    h.setStyle('.theme-playful.container', { display: 'flex', opacity: 1 });
  }
  async hide(withFadeOut = true) {
    h.setStyle('.theme-playful.container', { opacity: 0 });
    if (withFadeOut) {
      await h.timeout(500);
    }
    h.setStyle('.theme-playful.container', { display: 'none' });
  }
}

h.setProp(window, 'tr.nt.playful', new TrThemePlayful());
