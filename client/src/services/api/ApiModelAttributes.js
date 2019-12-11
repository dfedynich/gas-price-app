class Attribute {
    constructor({ modelKey, jsonKey }) {
        this.modelKey = modelKey;
        this.jsonKey = jsonKey || modelKey;
    }

    toJSON(val) {
        return val;
    }

    fromJSON(val, parent) {
        return val || null;
    }
}

class AttributeNumber extends Attribute {
    toJSON(val) {
        return val;
    }
    fromJSON(val, parent) {
        if (!isNaN(val)) {
            return Number(val);
        } else {
            return null;
        }
    }
}

class AttributeBoolean extends Attribute {
    toJSON(val) {
        return val;
    }
    fromJSON(val, parent) {
        return val === 'true' || val === true || false;
    }
}

class AttributeString extends Attribute {
    toJSON(val) {
        return val;
    }
    fromJSON(val, parent) {
        return val || '';
    }
}

class AttributeList extends Attribute {
    toJSON(val) {
        return val;
    }
    fromJSON(val, parent) {
        return val || [];
    }
}

class AttributeDate extends Attribute {
    toJSON(val) {
        if (!val) {
            return val;
        }
        if (!(val instanceof Date)) {
            throw new Error(
                `Attempting to toJSON AttributeDate which is not a date: ${this.modelKey} = ${val}`
            );
        }
        return val.toISOString();
    }

    fromJSON(val, parent) {
        if (!val) {
            return null;
        }
        return new Date(val);
    }
}

class AttributeDateTime extends Attribute {
    toJSON(val) {
        if (!val) {
            return null;
        }
        if (!(val instanceof Date)) {
            throw new Error(
                `Attempting to toJSON AttributeDateTime which is not a date: ${this.modelKey}  = ${val}`
            );
        }
        return val.getTime() / 1000.0;
    }

    fromJSON(val, parent) {
        if (!val) {
            return null;
        }
        return new Date(val * 1000);
    }
}

class AttributeCollection extends Attribute {
    constructor({ modelKey, jsonKey, itemClass }) {
        super(...arguments);
        this.itemClass = itemClass;
    }

    toJSON(vals) {
        if (!vals) {
            return [];
        }
        const json = [];
        for (const val of vals) {
            if (val.toJSON != null) {
                json.push(val.toJSON());
            } else {
                json.push(val);
            }
        }
        return json;
    }

    fromJSON(json, parent) {
        if (!json || !(json instanceof Array)) {
            return [];
        }
        const objs = json.map(objJSON => new this.itemClass(objJSON));
        return objs;
    }
}

const ApiModelAttributes = {
    Number() {
        return new AttributeNumber(...arguments);
    },
    String() {
        return new AttributeString(...arguments);
    },
    List() {
        return new AttributeList(...arguments);
    },
    DateTime() {
        return new AttributeDateTime(...arguments);
    },
    Date() {
        return new AttributeDate(...arguments);
    },
    Collection() {
        return new AttributeCollection(...arguments);
    },
    Boolean() {
        return new AttributeBoolean(...arguments);
    },
    Object() {
        return new Attribute(...arguments);
    }
};

export default ApiModelAttributes;