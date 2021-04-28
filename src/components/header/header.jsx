import React, { useState } from 'react'
import style from './header.module.css'
import Modal from './modal/modal'
import logo_img from '../../assets/images/logo.png'
import menu_img from '../../assets/images/link-menu.png'
import info_img from '../../assets/images/link-info.png'
import restart_img from '../../assets/images/link-restart.png'
import options_img from '../../assets/images/link-options.png'
import credits_img from '../../assets/images/link-credits.png'
import games_img from '../../assets/images/link-games.png'


const Header = (props) => {
  const [modal, setModal] = useState({
    creditsModal: false,
    menuModal: false,
    infoModal: false,
    options: false
  })
  const credits = () => setModal({ ...modal, creditsModal: true, menuModal: false })
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
        <img src={logo_img} alt='' onClick={credits} />
      </div>
      <div className={style.menu}>
        <div className={style.menu_item}>
          <img src={restart_img} alt='' onClick={restart} />
        </div>
        <div className={style.menu_item}>
          <img src={menu_img} alt='' onClick={menu} />
        </div>
      </div>
      <Modal
        isOpened={modal.creditsModal}
        onModalClose={closeCredits}
        title={'Credits'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere?
          </p>
      </Modal>
      <Modal
        isOpened={modal.menuModal}
        onModalClose={closeMenu}
        title={''}>
        <div>
          <img src={logo_img} alt='' />
        </div>
        <div className='menu_item'>
          <img src={info_img} alt='' onClick={info} />
        </div>
        <div className='menu_item'>
          <img src={restart_img} alt='' onClick={restart} />
        </div>
        <div className='menu_item'>
          <img src={options_img} alt='' onClick={options} />
        </div>
        <div className='menu_item'>
          <img src={credits_img} alt='' onClick={credits} />
        </div>
        <div className='menu_item'>
          <a href='https://www.ya.ru' target='blank'><img src={games_img} alt='' /></a>
        </div>
      </Modal>
      <Modal
        isOpened={modal.infoModal}
        onModalClose={closeInfo}
        title={'Super Memory Game`s Info'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis inventore tempore aut vel odio doloremque
          tempora numquam consectetur voluptates natus!
        </p>
      </Modal>
      <Modal
        isOpened={modal.optionsModal}
        onModalClose={closeOptions}
        title={'Options (Under Construction!)'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis inventore tempore aut vel odio doloremque
          tempora numquam consectetur voluptates natus!
        </p>
      </Modal>
    </div >
  )
}

export default Header