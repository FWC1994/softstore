import React, {Component} from 'react';
import L from '../../libs/leaflet/leaflet'
import styles from './MapBox.css'
export default class MapBox extends Component {
    render() {
        return (
            <div className={styles.mapbox}>
            </div>
        )
    }
}