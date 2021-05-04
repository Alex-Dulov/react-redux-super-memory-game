import React, { useState } from 'react'
import style from './header.module.css'
import logo_img from '../../assets/images/logo.png'
import menu_img from '../../assets/images/link-menu.png'
import restart_img from '../../assets/images/link-restart.png'
import sound_on_img from '../../assets/images/sounds-on.png'
//import sound_off_img from '../../assets/images/sounds-off.png'
import music from '../../assets/audio/music.mp3'
import Menu from './menu/menu'
import Credits from './menu/credits'
import Info from './menu/info'
import Options from './menu/options'


const Header = (props) => {
  const [modal, setModal] = useState({
    creditsModal: false,
    menuModal: false,
    infoModal: false,
    options: false
  })
  const credits = () => setModal({ ...modal, creditsModal: true, menuModal: false })
  const isSounds = () => console.log('isSounds click')
  const menu = () => setModal({ ...modal, menuModal: true })
  const info = () => setModal({ ...modal, infoModal: true, menuModal: false })
  const options = () => setModal({ ...modal, optionsModal: true, menuModal: false })
  const closeCredits = () => setModal({ ...modal, creditsModal: false })
  const closeMenu = () => setModal({ ...modal, menuModal: false })
  const closeInfo = () => setModal({ ...modal, infoModal: false })
  const closeOptions = () => setModal({ ...modal, optionsModal: false })
  const restart = () => {
    props.restartGame()
    setModal({ ...modal, menuModal: false })
  }
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={logo_img} alt='' onClick={info} />
      </div>
      <div className={style.menu}>
        <div className={style.menu_item}>
          <img src={restart_img} alt='' onClick={restart} />
        </div>
        <div className={style.menu_item}>
          <img src={menu_img} alt='' onClick={menu} />
        </div>
        <div className={style.menu_sounds}>
          <img src={sound_on_img} alt='' onClick={isSounds} />
          <audio src={music} autoPlay={''}></audio>
        </div>
      </div>
      <Menu isOpened={modal.menuModal} onModalClose={closeMenu}
        info={info} restart={restart} options={options} credits={credits} />
      <Credits isOpened={modal.creditsModal} onModalClose={closeCredits} />
      <Info isOpened={modal.infoModal} onModalClose={closeInfo} />
      <Options isOpened={modal.optionsModal} onModalClose={closeOptions}
        setDifficulty={props.setDifficulty} restartGame={props.restartGame}
        isColorCards={props.isColorCards} />
    </div>
  )
}

export default Header