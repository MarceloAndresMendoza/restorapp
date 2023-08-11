let endpoint = 'https://n9t3ymgac3.execute-api.us-east-1.amazonaws.com/restorapi';

export const getDataAPI = async (param = '') => {
    try {
        if (param) { endpoint = endpoint + encodeURIComponent(param)};
        const response = await fetch(endpoint, {
            method: 'GET',
            redirect: 'follow',
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

export const updateDataAPI = async (data) => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Endpoint is not responding or there is no internet connection');
        }

        const updatedData = await response.json();
        return updatedData;
    } catch (error) {
        console.error('Update error:', error);
        throw error;
    }
};

