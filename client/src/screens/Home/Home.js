import React, {Fragment} from 'react';
import { usePosition } from './../../hooks/usePosition';
import OverlayLayout from './../../layouts/OverlayLayout';
import Notification from './../../components/Notification';
import GasStationsList from './components/GasStationsList';
import LoadingRotator from './../../components/LoadingRotator';

const defaultPositionSettings = {
    timeout: 30000,
    maximumAge: 5*60*1000
};

const Home = () => {
    const {latitude, longitude, error} = usePosition(defaultPositionSettings);

    const renderOverlayNotification = (message) => (
        <OverlayLayout>
            <Notification>
                {message}
            </Notification>
        </OverlayLayout>
    );

    return (
        <section>
            {error
                ? renderOverlayNotification('Geolocation failed. Please, try to refresh the page')
                : (latitude && longitude)
                        ? <GasStationsList latitude={latitude} longitude={longitude}/>
                        : renderOverlayNotification(
                            <div>
                                <LoadingRotator>Please, wait for geolocation processing</LoadingRotator>
                                <div>If asked, allow browser geolocation to proceed</div>
                            </div>
                        )
            }
        </section>
    );
};

export default Home;




