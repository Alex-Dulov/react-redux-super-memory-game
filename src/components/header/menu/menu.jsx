import React from 'react'
import Modal from '../modal/modal'
import logo_img from '../../../assets/images/logo.png'
import info_img from '../../../assets/images/link-info.png'
import restart_img from '../../../assets/images/link-restart.png'
import options_img from '../../../assets/images/link-options.png'
import credits_img from '../../../assets/images/link-credits.png'
import games_img from '../../../assets/images/link-games.png'


const Menu = (props) => {
  return (
    <Modal
      isOpened={props.isOpened}
      onModalClose={props.onModalClose}
      title={''}>
      <div>
        <img src={logo_img} alt='' />
      </div>
      <div className='menu_item'>
        <img src={info_img} alt='' onClick={props.info} />
      </div>
      <div className='menu_item'>
        <img src={restart_img} alt='' onClick={props.restart} />
      </div>
      <div className='menu_item'>
        <img src={options_img} alt='' onClick={props.options} />
      </div>
      <div className='menu_item'>
        <img src={credits_img} alt='' onClick={props.credits} />
      </div>
      <div className='menu_item'>
        <a href='https://www.ya.ru' target='blank'><img src={games_img} alt='' /></a>
      </div>
    </Modal>
  )
}

export default Menu