import style from './App.module.css'
import HeaderContainer from './header/headerContainer'
import PlayingFieldContainer from './playingField/playingFieldContainer'


function App() {
  return (
    <div className={style.app_container}>
      <div className={style.app_body}>
        <HeaderContainer />
        <PlayingFieldContainer />
      </div>
    </div>
  )
}

export default App
