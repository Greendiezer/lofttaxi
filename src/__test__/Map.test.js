import React from "react"
import {render, fireEvent} from "@testing-library/react"
import Map from "../pages/Map"
import {Provider} from "react-redux"
import {Router} from "react-router-dom"
import mapboxgl from 'mapbox-gl';

jest.mock("mapbox-gl", () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn(),
    })),
    NavigationControl: jest.fn(),
}));

describe("Map", ()=>{
    it("renders correctly for authorized user", () => {

        const {container} = render(
            <Map />
        );
        expect(container.innerHTML).toBeTruthy()

    })
    
})
