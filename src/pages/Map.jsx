import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoiZ3JlZW5kaWV6ZXIiLCJhIjoiY2tvZnNnbXB6MHBmeTJ2czkxYmoydGF2ZyJ9.4y8MsdOD5u8zx62cuqoHgA";

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126],
            zoom: 10
        })
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() { 
        return ( 
            <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer}></div>
            </div>
        );
    }
}

export default Map;