import React from 'react'
import style from './Header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<div
				className={`${style.header__inscription} ${style.header__inscription_margin}`}
			>
				<span className={style.header__inscriptionText}>Тестовое задание</span>
			</div>

			<div
				className={`${style.header__logoBox} ${style.header__logoBox_margin}`}
			>
				<a href='#'>
					<img
						className={`logo ${style.header__logo}`}
						src='GraphemeLogo.svg'
						alt='logo grapheme'
					/>
				</a>
			</div>
		</header>
	)
}
export default Header
