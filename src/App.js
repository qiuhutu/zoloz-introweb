import selfieImage from './selfie_intro.svg';
import arrowLeft from './arrow_left.svg';
import './App.css';
import i18n from './react-i18next-config';
import { useTranslation } from 'react-i18next';
import ZolozRealIdCore from './zolozReadIdCore';

function parseUrlParams(search) {
  var params = {}
  try {
    var pairs = search.replace(/^\?/, '').split('&')
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=')
      var key = decodeURIComponent(pair[0])
      var value = decodeURIComponent(pair[1])
      params[key] = value
    }
    return params
  }
  catch (e) {
    return params
  }
}

function App() {
  const { t, i18n } = useTranslation()
  var zolozRealIdCore = new ZolozRealIdCore()

  var search = window.location.search
  var params = parseUrlParams(search)
  var locale = params['locale']
  var type = params["type"]

  switch (locale) {
    case "zh-cn":
    case "zh-CN":
      i18n.changeLanguage("cn")
      break
    case "zh-hk":
    case "zh-HK":
      i18n.changeLanguage("hk")
      break
    default:
      i18n.changeLanguage("en")
  }

  function backClick() {
    zolozRealIdCore.end('back')
  }

  function continueClick() {
    zolozRealIdCore.end('next')
  }

  return (
    <div className="zoloz-page">
      {
        type !== 'uob' ? (
          <div className="zoloz-topbar">
            <img src={arrowLeft} className="zoloz-icon-arrow-left" alt="turnBack" onClick={backClick} />
            <header className="zoloz-topbar-title">{t('title')}</header>
          </div>
        ) :
          (
            <div></div>
          )
      }

      <div className="zoloz-content">
        <img src={selfieImage} className="zoloz-logo" alt="logo" />
        <div className='zoloz-content-tips'>
          <header className='tips-title'>{t('tip-title')}</header>
          <ul className='tips-list'>
            <li>{t('tips.tip1')}</li>
            <li>{t('tips.tip2')}</li>
            <li>{t('tips.tip3')}</li>
            <li>{t('tips.tip4')}</li>
            <li>{t('tips.tip5')}</li>
          </ul>
        </div>
      </div>
      {type === 'uob' ?
        (
          <div className='zoloz-bottombar-uob'>
            <div className="continue-btn-uob" onClick={continueClick}>
              {t('button')}
            </div>
          </div>
        )
        :
        (
          <div className="zoloz-bottombar">
            <div className="continue-btn" onClick={continueClick}>
              {t('button')}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;