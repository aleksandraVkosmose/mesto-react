import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import '../index.js'



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({});
  }

  return (

    <div className="page">
      <Header />
      <Main onEditProfile={setIsEditProfilePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={setSelectedCard} />

      <Footer />

      {/* popup редактировать профиль*/}
      <PopupWithForm name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
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
      </PopupWithForm>

      {/* popup добавить фото */}

      <PopupWithForm name="add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
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

      </PopupWithForm>

      {/* popup полноразмерное фото */}

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      {/* popup редактировать аватар*/}

      <PopupWithForm name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
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
      </PopupWithForm>

      {/* popup подтверждения*/}

      <PopupWithForm name="confirm"
        title="Вы уверены?"
        buttonText="Да" />

    </div>

  );
}

export default App;
