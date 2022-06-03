const baseUrl = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('token') || undefined

export const fetchNotoken = async (endpoint, data, method = 'GET') =>{
    console.log(endpoint, data, method)
    const url = `${ baseUrl }/${ endpoint }`;

    if(method === 'GET'){
        const resp = await fetch( url );
        return await resp.json();
    }else{
        const resp = await fetch( url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }

}


export const fetchtoken = async (endpoint, data, method = 'GET') =>{
    const url = `${ baseUrl }/${ endpoint }`;

    if(method === 'GET'){
        const resp = await fetch( url, { 
            headers: {
                'x-token': token
            }
        } );
        return await resp.json();
    }else{
        const resp = await fetch( url, {
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }

}