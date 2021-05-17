import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {logOut} from '../actions/actions'
import {getCard} from '../actions/actions'
import {changeCard} from '../actions/actions'
import { Input, TextField, Card, Paper, Button} from '@material-ui/core';

const Profile = ({ token, cardData, error, isLoading, getCard, unauthenticate, logOut, changeCard}) => {
    useEffect(() => {
        getCard(token);
    }, [token])

    const handlePostCardData = (event) => {
        event.preventDefault();
        const {cardNumber, expiryDate, cardName, cvc} = event.target
        changeCard({ cardNumber: cardNumber.value, expiryDate: expiryDate.value, cardName: cardName.value, cvc: cvc.value, token: token})
    }

    unauthenticate = () => {
        logOut();
    }

    // console.log(cardData)

        return (
            <div>
                <Card className="profile__block">
                    <h1>Профиль</h1>
                    <h2>Введите платежные данные</h2>
                    {isLoading && <h2>Загрузка...</h2>}
                    <div className="card__block">
                        <div className="card__area_left">
                            <form className="card__form" onSubmit={handlePostCardData}>                                
                                <TextField  className="card__field" required label="Имя владельца" name="cardName" placeholder={cardData.cardName}/>
                                <TextField  className="card__field" required id="cardNumber" label="Номер карты" name="cardNumber" placeholder={cardData.cardNumber}/>
                                <TextField  className="card__field" required id="expiryDate" label="MM/YY" name="expiryDate" placeholder={cardData.expiryDate}/>
                                <TextField  className="card__field" required id="cvc" label="CVC" name="cvc" placeholder={cardData.cvc}/>
                                <Button type="submit">Сохранить</Button>
                            </form>
                        </div>
                        <div className="card__area_rigth">
                            <Paper className="">
                                <div className="card__row">{cardData.expiryDate}</div>
                                <div className="card__row">{cardData.cardNumber}</div>
                                <div className="card__row">{cardData.cvc}</div>
                            </Paper>
                        </div>
                    </div>
                    <button onClick={unauthenticate}>Log out</button>
                </Card>
            </div>
        ); 
}

const mapStateToProps = ({card, auth}) => ({ 
    token: auth.token,
    cardData: card.data,
    isLoading: card.isLoading,
    error: card.error
 });
const mapDispatchToProps = { getCard, logOut, changeCard }

export const ProfileWithAuth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);