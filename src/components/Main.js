import React, {useEffect, useState} from 'react';
import api from "../utils/api"
import Card from './Card';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}){

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((profileInfo) => {
        setUserName(profileInfo.name)
        setUserDescription(profileInfo.about)
        setUserAvatar(profileInfo.avatar)
    })
        .catch((err) => console.log(err))

    api.getCards().then((cardsData) => {
        setCards(cardsData.map((data) => ({
            cardId: data._id,
            name: data.name,
            link: data.link,
            likes: data.likes
        })))
    })
        .catch((err) => console.log(err))
}, []);

    return(
    
        <div className="main">
        <section className="profile">
        <div className="profile__card">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="аватар"
          />
          <button className="profile__avatar-button"
            aria-label="открыть форму обновления аватара профиля"
            onClick = {onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__button-edit button" type="button" onClick = {onEditProfile}/>
          <h2 className="profile__subtitle">{userDescription}</h2>
        </div>
        <button className="profile__button-add button" type="button" onClick = {onAddPlace}/>
      </section>
      <section className="elements" aria-label="Фотокарточки">
      
            {cards.map((card) => (
                <Card
                    key={card.cardId}
                    name={card.name}
                    link={card.link}
                    likes={card.likes}
                    onCardClick={onCardClick}
                />
            ))}
      
        </section>
    </div>
    );
}
export default Main;