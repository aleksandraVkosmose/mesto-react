import React from 'react'
import './index.js'
import logoPath from './images/logo.svg'
import ImagePath from './images/image.jpg'

function App() {
  return (

  <div className="page">

  <header className="header">
    <img
      className="header__logo"
      src={logoPath}
      alt="логотип место"
    />
  </header>
  <main className="main">
    <section className="profile">
      <div className="profile__card">
        <img
          className="profile__avatar"
          src={ImagePath}
          alt="аватар"
        />
        <button
          className="profile__avatar-button"
          aria-label="открыть форму обновления аватара профиля"
        />
      </div>
      <div className="profile__info">
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <button className="profile__button-edit button" type="button" />
        <h2 className="profile__subtitle">Исследователь океана</h2>
      </div>
      <button className="profile__button-add button" type="button" />
    </section>
    <section className="elements"></section>
  </main>
  <footer className="footer">
    <p className="footer__autor">© 2020 Mesto Russia</p>
  </footer>
  
  {/* popup редактировать профиль*/}
  <div className="popup popup-edit">
    <div className="popup__container popup__container-edit">
      <button
        className="popup__button-close button popup__button-close-edit"
        type="button"
      />
      <form
        className="popup__form popup__form-edit"
        name="edit-from"
        noValidate=""
      >
        <h4 className="popup__profile popup__profile-edit">
          Редактировать профиль
        </h4>
        <input
          className="popup__input popup__input_type_name"
          id="name-input"
          type="text"
          defaultValue=""
          name="name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__input-error name-input-error" />
        <input
          className="popup__input popup__input_type_job"
          id="job-input"
          type="text"
          defaultValue=""
          name="about"
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__input-error job-input-error" />
        <button className="popup__button-save" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
  {/* popup добавить фото */}
  <div className="popup popup-add">
    <div className="popup__container popup__container-add">
      <button
        className="popup__button-close button popup__button-close-add"
        type="button"
      />
      <form
        className="popup__form popup__form-add"
        name="add-from"
        noValidate=""
      >
        <h4 className="popup__profile popup__profile-add">Новое место</h4>
        <input
          className="popup__input popup__input_type_place"
          id="place-input"
          type="text"
          defaultValue=""
          placeholder="Название"
          name="name"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__input-error place-input-error" />
        <input
          className="popup__input popup__input_type_link"
          id="link-input"
          type="url"
          defaultValue=""
          placeholder="Ссылка на картинку"
          name="link"
          required=""
        />
        <span className="popup__input-error link-input-error" />
        <button className="popup__button-save" type="submit">
          Создать
        </button>
      </form>
    </div>
  </div>
  {/* popup полноразмерное фото */}
  <div className="popup popup_photo-card">
    <div className="popup__container-card">
      <button
        className="popup__button-close button popup__button-close-photo"
        type="button"
      />
      <img className="popup__img-card" alt="Полноразмерное фото" />
      <h4 className="popup__title-card">Название места</h4>
    </div>
  </div>
  {/* popup редактировать аватар*/}
  <div className="popup popup-avatar">
    <div className="popup__container popup__container-avatar">
      <button
        className="popup__button-close button popup__button-close-avatar"
        type="button"
      />
      <form
        className="popup__form popup__form-avatar"
        name="avatar-from"
        noValidate=""
      >
        <h4 className="popup__profile popup__profile-avatar">
          Обновить аватар
        </h4>
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar-input"
          type="url"
          defaultValue=""
          name="avatar"
          placeholder="Ссылка на аватар"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__input-error avatar-input-error" />
        <button className="popup__button-save" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
  {/* popup подтверждения*/}
  <div className="popup popup-confirm">
    <div className="popup__container popup__container-confirm">
      <button
        className="popup__button-close button popup__button-close-confirm"
        type="button"
      />
      <form
        className="popup__form popup__form-confirm"
        name="confirm-from"
        noValidate=""
      >
        <h4 className="popup__profile popup__profile-confirm">Вы уверены?</h4>
        <button className="popup__button-save" type="submit">
          Да
        </button>
      </form>
    </div>
  </div>
  {/* template */}
  <template id="element" />

</div>

  );
}

export default App;
