const got = require('got');
const { vendors: {
    companyFeed
} } = require('../../config');

const domainsCache = new Map();

exports.getDomainByName = async (name) => {
    if (name === null || name === undefined) {
        return getAnonymousDomain(name);
    }

    try {
        const { url, options } = getRequestParams(name);
        const response = await got(url, options);

        return {
            ...response.body,
            'isCached': response.isFromCache
        }
    } catch (error) {
        if (error.response.statusCode === 404) {
            const anonymous = getAnonymousDomain(name);
            return {
                ...anonymous,
                isCached: error.response.isFromCache
            }
        }
        throw error;
    }
};

const getRequestParams = (name) => ({
    url: 'domains/find',
    options: {
        prefixUrl: companyFeed.apiUrl,
        searchParams: new URLSearchParams([['name', name]]),
        headers: {
            'Authorization': `Bearer ${companyFeed.authKey}`
        },
        responseType: 'json',
        cache: domainsCache
    }
});

const getAnonymousDomain = (name) => ({
    'domain': null,
    'logo': companyFeed.logoNotFound,
    'name': name
});


