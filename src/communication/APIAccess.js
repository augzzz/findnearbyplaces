import configuration from '../configuration';

let backendAddress = configuration.backendAddress;

let apiAccess = {
    
    addCustomer: (email, password) => {
        return fetch(`${backendAddress}/customer`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(x => x.json())
            .then(x => {
                console.log(x);
                return x;
            });
    },

    login: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'Post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ email, password })
        })
            .then(x => x.json())
            .then(x => {
                console.log(x);
                return x;
            });
    },

    addPlace: (name, category_id, latitude, longitude, description) => {
        return fetch(`${backendAddress}/place`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, category_id, latitude, longitude, description })
        })
            .then(x => x.json())
            .then(x => {
                console.log(x);
                return x;
            });
    },

    logout: () => {
        return fetch(`${backendAddress}/logout`, {
            method: 'Post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(x => x.json())
            .then(x => {
                console.log(x);
                return x;
            });
    }
    
}

export default apiAccess;