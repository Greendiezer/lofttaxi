import React, { useRef, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Input, TextField, Card, Paper, Button, MenuItem, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { getAddressList, getCard, getRoute } from '../actions/actions'
import mapboxgl from 'mapbox-gl';
import "../stylesheets/Map.css";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1IjoiZ3JlZW5kaWV6ZXIiLCJhIjoiY2tvZnNnbXB6MHBmeTJ2czkxYmoydGF2ZyJ9.4y8MsdOD5u8zx62cuqoHgA";

const Map = ({ token, cardData, error, isLoading, getCard, addresses, getAddressList, getRoute, route }) => {

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        getCard(token);
        getAddressList();
    }, [token])

    const [card, setCardData] = useState({})
    const [addressListAccess, setAddressListAccess] = useState(false)
    const [addressList, setAddressList] = useState([])
    const [addressTo, setAddressTo] = useState('')
    const [addressFrom, setAddressFrom] = useState('')
    const [activeOrder, setActiveOrder] = useState(false)

    const cardDataCheck = (cardData) => {
        for (let field in cardData) {
            if (!cardData[field]) {
                return false
            }
            return true
        }
    }

    useEffect(() => {
        if (cardData) {
            setCardData(cardData)
            if (cardDataCheck(cardData)){
                setAddressListAccess(true)
            }
        }  
        if (addresses) {
            setAddressList(addresses)
        }
    }, [cardData])



    const paymentCheck = function(cardData) {
        for (let field in cardData) {
            if(!cardData[field]) {
                return
            }
        }
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.3056504, 59.9429126],
            zoom: 12
        });

    });

    const handleChangeAddressFrom = (event) => {
        setAddressFrom(event.target.value)
        if (addressTo) {
            const addresses = {
                address1: event.target.value,
                address2: addressTo,
            }
            getRoute(addresses)
        }
    }

    const handleChangeAddressTo = (event) => {
        setAddressTo(event.target.value)

        if (addressFrom) {
            const addresses = {
                address1: addressFrom,
                address2: event.target.value
            }
            getRoute(addresses)
        }
    }

    const handleCallTaxi = (e) => {
        
        const addresses = {
            address1: addressFrom,
            address2: addressTo
        }

        drawRoute(map, route)
        setActiveOrder(true)
    }

    const cancelOrder = () => {
        setActiveOrder(false)
        if (map.current.getLayer("mapRoute")) {

            map.current.removeLayer("mapRoute")
            map.current.flyTo({
                center: [30.3056504, 59.9429126],
                zoom: 15
            });
        }
        
    }

    const drawRoute = (map, coordinates) => {
        map.current.flyTo({
            center: coordinates[0],
            zoom: 15
        });

        if (map.current.getLayer("mapRoute")) {

            map.current.removeLayer("mapRoute")

        } else {
            map.current.addLayer({
                id: "mapRoute",
                type: "line",
                source: {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates
                        }
                    }
                },
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#ffc617",
                    "line-width": 8
                }
            });

        }
        

        
    };


        return ( 
            <div className="map-wrapper">
                <div id="map" data-testid="map" className="map" ref={mapContainer}>
                    {
                    addressListAccess ? 
                        <Paper className="address__block">
                            {
                            activeOrder ? 
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    justify="center"
                                >
                                    <Typography variant="h4" gutterBottom>
                                         Заказ размещен
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                                    </Typography>
                                    <Button onClick={cancelOrder}>
                                        Сделать новый заказ
                                    </Button>
                                </Grid>
                            :
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <TextField
                                        id=""
                                        select
                                        label="Откуда"
                                        value={addressFrom}
                                        onChange={handleChangeAddressFrom}
                                        className="address__select"
                                    >
                                        {
                                            addressList.map(
                                                (option) => {
                                                    if (option !== addressTo) {
                                                        return (
                                                            <MenuItem value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                    </TextField>
                                    <TextField
                                        id=""
                                        select
                                        label="Куда"
                                        value={addressTo}
                                        onChange={handleChangeAddressTo}
                                        className="address__select"
                                    >
                                        {
                                            addressList.map(
                                                (option) => {
                                                    if (option !== addressFrom) {
                                                        return (
                                                            <MenuItem value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                    </TextField>
                                    <Button
                                        onClick={handleCallTaxi}
                                        color="primary"
                                        variant="contained"
                                    >
                                        Вызвать такси
                                    </Button>
                                </Grid>                                
                            }
                            
                        </Paper> 
                        :
                        <Paper className="address__block">
                            <Grid
                                container
                                direction="column"
                                justify="center"
                            >
                                <h3> Заполните данные карты в профиле, чтобы сделать заказ.</h3>
                                <Link to="/profile" className="header__link">
                                    <Button 
                                        color="primary"
                                        variant="contained"
                                        align="center"
                                        fullWidth
                                    >
                                        Перейти в профиль
                                    </Button>
                                </Link>
                            </Grid>
                        </Paper>      
                            
                    }
                </div>
            </div>
        );
    
}

const mapStateToProps = ({ card, address, auth, route }) => ({ isLoading: address.isLoading, addresses: address.data.addresses, cardData: card.data, token: auth.token, route: route.data });
const mapDispatchToProps = { getAddressList, getCard, getRoute }

export const MapWithAuth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);