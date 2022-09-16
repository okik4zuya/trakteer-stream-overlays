class TrThemeTransitional {
  name() {
    return 'transitional';
  }
  dependencies() {
    return {
      'js': [],
      'css': []
    };
  }
  font() {
    return {
      var: '--transitionalFontFamily', default: 'kingthings'
    }
  }
  styles() {
    return [
      {key: `nt_5_clr2`, var: '--transitionalUnitBg', default: '#FFFFFF'},
      {key: `nt_5_clr1`, var: '--transitionalUnitText', default: '#F0323C'},
      {key: `nt_5_clr3`, var: '--transitionalUnitOutline', default: '#444444'},
      {key: `nt_5_clr3`, var: '--transitionalInfoBg', default: '#444444'},
      {key: `nt_5_clr2`, var: '--transitionalInfoText', default: '#FFFFFF'},
      {key: `nt_5_clr4`, var: '--transitionalInfoText2', default: '#FBD758'},
      {key: `nt_5_clr1`, var: '--transitionalShadow1', default: '#F0323C'},
      {key: `nt_5_clr4`, var: '--transitionalShadow2', default: '#FBD758'},
      {key: `nt_5_clr4`, var: '--transitionalOrnament', default: '#FBD758'},
    ];
  }
  html() {
    return `
        <div class="theme-transitional transitional__widget transitional__fancy container">
            <div class="transitional__widget__unit">
            <div class="transitional__unit__total">
                
            </div>
            <div class="transitional__unit__image">
                <img src="https://cdn.trakteer.id/images/mix/cendol.png" alt="">
            </div>
            <div class="transitional__unit__ornaments">
                <div class="transitional__ornament"></div>
                <div class="transitional__ornament"></div>
                <div class="transitional__ornament"></div>
                <div class="transitional__ornament"></div>
            </div>
            </div>
            <div class="transitional__widget__media">
                <div class="transitional__animation"></div>
                <div class="transitional__player"></div>
            </div>
            <div class="transitional__widget__info">
                <div class="transitional__info__trakteer">
                    <span class="transitional__info__supporter-name"></span> 
                    mentraktir 
                    <span class="transitional__info__trakteer-unit"></span>
                    <span class="transitional__info__unit-name"></span>
                </div>
                <div class="transitional__info__message" id="demo">
                </div>
            </div>
        </div>
    `;
  }
  setup() {

  }
  setData(data, setting = null) {
    h.setHTML('.theme-transitional .transitional__info__supporter-name', h.txtOverflow(data.supporter_name, 32));
    h.setHTML('.theme-transitional .transitional__info__trakteer-unit', (data.quantity).toString());
    h.setHTML('.theme-transitional .transitional__unit__total', (data.quantity).toString()+'x');
    h.setHTML('.theme-transitional .transitional__info__unit-name', data.unit);
    h.setHTML('.theme-transitional .transitional__info__message', data.supporter_message || '');
  }
  addMediaStyle() {
    h.el('.theme-transitional').classList.add('is-media');
    h.setStyle('.transitional__widget__media', { display: 'block'  });
  }
  removeMediaStyle() {
    h.el('.theme-transitional').classList.remove('is-media');
    h.setStyle('.transitional__widget__media', { display: 'none'  });
  }
  mediaElements() {
    return {
      'gif': h.el('.theme-transitional .transitional__animation'),
      'video': h.el('.theme-transitional .transitional__player')
    };
  }
  async beforeScaleOnPreview() {
    h.setStyle('.theme-transitional.container', { display: 'block'  });
  }
  async show() {
    h.setStyle('.theme-transitional.container', { display: 'block', opacity: 1 });
  }
  async hide(withFadeOut = true) {
    h.setStyle('.theme-transitional.container', { opacity: 0 });
    if (withFadeOut) {
      await h.timeout(500);
    }
    h.setStyle('.theme-transitional.container', { display: 'none' });
  }
}

h.setProp(window, 'tr.nt.transitional', new TrThemeTransitional());
