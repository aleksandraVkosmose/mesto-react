import React from 'react';

function PopupWithForm({ name, buttonText, title, children, isOpen, onClose }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container-${name}`}>
        <button
          className={`popup__button-close button popup__button-close-${name}`}
          type="button"
          onClick={onClose}
        />
        <form
          className={`popup__form popup__form-${name}`}
          name={`${name}-from`}
        >
          <h4 className={`popup__profile popup__profile-${name}`}>
            {title}
          </h4>
          {children}
          <button className="popup__button-save" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;