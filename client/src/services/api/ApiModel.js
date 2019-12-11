import Attributes from './ApiModelAttributes';

export default class ApiModel {
    constructor(json = null) {
        if (json) {
            this.fromJSON(json);
        }
    }

    attributes() {
        return this.constructor.attributes;
    }

    fromJSON(json = {}) {
        const attributes = this.attributes();
        for (const attrName of Object.keys(attributes)) {
            const attr = attributes[attrName];
            if (json[attr.jsonKey] !== undefined) {
                this[attrName] = attr.fromJSON(json[attr.jsonKey]);
            }
        }
        return this;
    }

    toJSON() {
        const json = {};
        const attributes = this.attributes();
        for (const attrName of Object.keys(attributes)) {
            const attr = attributes[attrName];
            json[attr.jsonKey] = attr.toJSON(this[attrName]);
        }
        json['object'] = this.constructor.name.toLowerCase();
        return json;
    }
}

ApiModel.attributes = {
    id: Attributes.String({
        modelKey: 'id',
    })
};