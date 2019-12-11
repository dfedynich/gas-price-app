import {useState, useEffect} from 'react';

const defaultSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0
};

export const usePosition = (settings = defaultSettings) => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({coords, timestamp}) => {
        console.log('onChange');
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            timestamp,
        });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not supported');
            return;
        }

        geo.getCurrentPosition(onChange, onError, settings);

    }, [settings]);

    return {...position, error};
};