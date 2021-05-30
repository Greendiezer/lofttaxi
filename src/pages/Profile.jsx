import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {logOut, getCard, changeCard} from '../actions/actions'
import { Input, TextField, Card, Paper, Button} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import "../stylesheets/Profile.css"

const Profile = ({ token, cardData, error, isLoading, getCard, unauthenticate, logOut, changeCard}) => {
    useEffect(() => {
        getCard(token);
    }, [token])

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvc, setCvc] = useState('')

    useEffect(() => {
        if (cardData.cardName) {
            setCardName(cardData.cardName)
        }
        if (cardData.cardNumber) {
            setCardNumber(cardData.cardNumber)
        }
        if (cardData.expiryDate) {
            setExpiryDate(cardData.expiryDate)
        }
        if (cardData.cvc) {
            setCvc(cardData.cvc)
        }
    }, [cardData.cardName, cardData.cardNumber, cardData.expiryDate, cardData.cvc])

    const handlePostCardData = (event) => {
        event.preventDefault();
        changeCard({ cardNumber, expiryDate, cardName, cvc, token })
    }

    unauthenticate = () => {
        logOut();
    }

    // console.log(cardData)

        return (
            <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
            className="profile__section"
            >
                <Card className="profile__block">
                    <CardContent>
                    <h1>Профиль</h1>
                    <h2>Введите платежные данные</h2>
                    {isLoading && <h2>Загрузка...</h2>}
                    <div className="card__block">
                        
                        <div className="card__area_left">
                            <Card>
                                <CardContent>
                                    <form className="card__form" onSubmit={handlePostCardData}>                                
                                        <TextField className="card__field" required label="Имя владельца" name="cardName" value={cardName} onChange={e => setCardName(e.target.value)}/>
                                        <TextField className="card__field" required id="cardNumber" label="Номер карты" name="cardNumber" value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
                                        <TextField className="card__field" required id="expiryDate" label="MM/YY" name="expiryDate" value={expiryDate} onChange={e => setExpiryDate(e.target.value)}/>
                                        <TextField className="card__field" required id="cvc" label="CVC" name="cvc" value={cvc} onChange={e => setCvc(e.target.value)}/>
                                        <Button type="submit">Сохранить</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                        
                        <div className="card__area_rigth">
                            <Card>
                                <CardContent>
                                        <div className="card__row">{cardData.expiryDate}</div>
                                        <div className="card__row">{cardData.cardNumber}</div>
                                        <div className="card__row">{cardData.cvc}</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <button onClick={unauthenticate}>Log out</button>
                    </CardContent>
                </Card>
            </Grid>
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