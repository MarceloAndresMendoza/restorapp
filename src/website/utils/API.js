let endpoint = 'https://w71gheclyk.execute-api.us-east-1.amazonaws.com/Prod/';

export const getDataAPI = async (param = '') => {
    try {
        if (param) { endpoint = endpoint + encodeURIComponent(param)};
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Endpoint is not responding or there is no internet connection');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
