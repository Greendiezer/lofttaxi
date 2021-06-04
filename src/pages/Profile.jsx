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
                    
                    <CardContent align="center">
                    <h1>Профиль</h1>
                    <p>Способ оплаты</p>
                    {isLoading && <h2>Загрузка...</h2>}
                    <div className="card__block">
                        
                        <div className="">
                            <form className="card__form" onSubmit={handlePostCardData}>
                                <Grid container
                                    alignItems="center"
                                    spacing={4}
                                >
                                    <Grid item xs={12}>
                                        <Grid container
                                            direction="row"
                                            justify="center"
                                            spacing={4}
                                        >
                                            <Grid item xs={6}>
                                                <Card>
                                                    <CardContent>
                                                        <TextField className="card__field" required id="cardNumber" label="Номер карты" name="cardNumber" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                                                        <TextField className="card__field" required id="expiryDate" label="MM/YY" name="expiryDate" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Card>
                                                    <CardContent>
                                                        <TextField className="card__field" required label="Имя владельца" name="cardName" value={cardName} onChange={e => setCardName(e.target.value)} />
                                                        <TextField className="card__field" required id="cvc" label="CVC" name="cvc" value={cvc} onChange={e => setCvc(e.target.value)} />
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <Grid align="center" spacing={4}>
                                            <Button type="submit" color="primary" variant="contained" style={{marginTop: "24px"}}>Сохранить</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                >
                                    <Grid item>
                                        <Card>
                                            <CardContent>                            
                                                <TextField className="card__field" required id="cardNumber" label="Номер карты" name="cardNumber" value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
                                                <TextField className="card__field" required id="expiryDate" label="MM/YY" name="expiryDate" value={expiryDate} onChange={e => setExpiryDate(e.target.value)}/>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item>
                                        <Card>
                                            <CardContent>                                                                            
                                                <TextField className="card__field" required label="Имя владельца" name="cardName" value={cardName} onChange={e => setCardName(e.target.value)}/>
                                                <TextField className="card__field" required id="cvc" label="CVC" name="cvc" value={cvc} onChange={e => setCvc(e.target.value)}/>                                                                                            
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Button type="submit">Сохранить</Button>
                                </Grid> */}
                            </form>  
                        </div>
                    </div>
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