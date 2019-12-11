import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { useDataApi } from './../../../hooks/useDataApi';
import { useScrollRenderingDispenser } from './../../../hooks/useScrollRenderingDispenser';
import OverlayLayout from './../../../layouts/OverlayLayout';
import Notification from './../../../components/Notification';
import { getAllByGeo } from './../../../services/gasStations/gasStation.api';
import LoadingRotator from './../../../components/LoadingRotator';
import Card from './../../../components/Card';
import styled from "styled-components";

const StyledGasStationsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GasStationsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const GasStationsList = ({latitude, longitude}) => {
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        {
            apiService: getAllByGeo,
            initialApiParams: {latitude, longitude},
            initialData: []
        }
    );
    const {dispensedItems} = useScrollRenderingDispenser(data);

    const renderOverlayNotification = (message) => (
        <OverlayLayout>
            <Notification>{message}</Notification>
        </OverlayLayout>
    );

    const renderGasStationsList = (data) => {
        if (data.length === 0) {
            return renderOverlayNotification('No gas stations found in your area')
        }

        return (
            <StyledGasStationsList>
                {dispensedItems.map(item => (
                    <GasStationsListItem key={item.id}>
                        <Card
                            title={item.name}
                            badgeTitle={item.distance}
                            avatarImage={item.logo}
                            thumbImage={item.stationImage}
                            footer={[item.address, item.zip].join(', ')}
                            listItems={Object.keys(item.prices).map(gasType => ({
                                name: gasType.charAt(0).toUpperCase() + gasType.slice(1),
                                value: `$${item.prices[gasType]}`
                            }))}
                        />
                    </GasStationsListItem>
                ))}
            </StyledGasStationsList>
        );
    };

    return (
        <Fragment>
            {isError && renderOverlayNotification('Something went wrong...')}

            {isLoading
                ? <LoadingRotator>Loading Gas Stations...</LoadingRotator>
                : renderGasStationsList(data)
            }
        </Fragment>
    );
};

GasStationsList.propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
};

export default GasStationsList;




