class TrThemeRetro {
  name() {
    return 'retro';
  }
  dependencies() {
    return {
      'js': [],
      'css': []
    };
  }
  font() {
    return {
      var: '--retroFontFamily', default: 'kingthings'
    }
  }
  styles() {
    return [
      {key: `nt_4_clr1`, var: '--retroStreamContentBg', default: '#fbfbfb'},
      {key: `nt_4_clr4`, var: '--retroStreamContentColor', default: '#000'},
      {key: `nt_4_clr5`, var: '--retroStreamContentBoxBorder', default: '#262522'},
      {key: `nt_4_clr2`, var: '--retroSupportColor', default: '#be1e2d'},
      {key: `nt_4_clr3`, var: '--retroActionColor', default: '#000'},
    ];
  }
  html() {
    return `
      <div class="theme-retro container">
        <div class="stream-content">
          <div class="media">
            <div class="animation"></div>
            <div class="player"></div>
          </div>
          <div class="heading">
            <span class="supporter-name"></span> 
            <span class="action">mentraktir</span>
            <span class="quantity"></span>
            <span class="unit-name"></span>
          </div>
          <div class="support-message"></div>
        </div>
      </div>
    `;
  }
  setup() {

  }
  setData(data, setting = null) {
    h.setHTML('.theme-retro .supporter-name', h.txtOverflow(data.supporter_name, 32));
    h.setHTML('.theme-retro .quantity', (data.quantity).toString());
    h.setHTML('.theme-retro .unit-name', data.unit);
    h.setHTML('.theme-retro .support-message', data.supporter_message || '');
  }
  addMediaStyle() {
    h.el('.theme-retro').classList.add('is-media');
  }
  removeMediaStyle() {
    h.el('.theme-retro').classList.remove('is-media');
  }
  mediaElements() {
    return {
      'gif': h.el('.theme-retro .animation'),
      'video': h.el('.theme-retro .player')
    };
  }
  async beforeScaleOnPreview() {
    h.setStyle('.theme-retro.container', { display: 'flex' });
  }
  async show() {
    h.setStyle('.theme-retro.container', { display: 'flex', opacity: 1 });
  }
  async hide(withFadeOut = true) {
    h.setStyle('.theme-retro.container', { opacity: 0 });
    if (withFadeOut) {
      await h.timeout(500);
    }
    h.setStyle('.theme-retro.container', { display: 'none' });
  }
}

h.setProp(window, 'tr.nt.retro', new TrThemeRetro());
