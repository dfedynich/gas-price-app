import Attributes from '../api/ApiModelAttributes';
import ApiModel from '../api/ApiModel';

function importAll (r) {
    return r.keys().map(r);
}

const gasStationImages = process.env.NODE_ENV !== 'test'
    ? importAll(require.context('../../assets/images/gasStations', false, /\.(png|jpe?g|svg)$/)).map(r => r.default)
    : [];

export default class GasStationModel extends ApiModel {
    constructor() {
        super(...arguments);
        if (!this.name) {
            this.name = 'N/A';
        }

        if (!this.prices) {
            this.prices = [];
        }

        this.stationImage = this.getAvatarUrl();
    }

    getAvatarUrl = () => {
        if (gasStationImages && gasStationImages.length > 0) {
            const randomIndex = Math.floor(Math.random() * gasStationImages.length);
            return gasStationImages[randomIndex];
        }

        return null;
    }
}

GasStationModel.attributes = {
    ...ApiModel.attributes,
    name: Attributes.String({
        modelKey: 'name',
    }),
    logo: Attributes.String({
        modelKey: 'logo',
    }),
    domain: Attributes.String({
        modelKey: 'domain',
    }),
    zip: Attributes.String({
        modelKey: 'zip',
    }),
    prices: Attributes.List({
        modelKey: 'prices',
    }),
    region: Attributes.String({
        modelKey: 'region',
    }),
    address: Attributes.String({
        modelKey: 'address',
    }),
    distance: Attributes.String({
        modelKey: 'distance',
    })
};