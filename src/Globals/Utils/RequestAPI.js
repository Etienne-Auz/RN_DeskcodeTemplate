import {DEV_URL, PROD_URL, NODE_ENV} from '@env';


export const FetchAPI = async (type, params) => {
    const {data, error} = await RequestAPI(type, params);
    return {data, error};
};

const RequestAPI = async (type, params) => {
    const url = (NODE_ENV === "development" ? DEV_URL : PROD_URL);
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    if(!type)
    {
        return {error: "Request type must be specified !!"};
    }

    let data_;

    switch(type) {        
        case "POST":
            data_ = await fetch(url+params.url, {
            method: 'POST',
            headers: params.headers || headers,
            body: params.body
             });
            break;

        case "LOGIN":
            data_ = await fetch(url+"/login", {
            method: 'POST',
            headers: params.headers || headers,
            body: JSON.stringify(params.body)
            });
            break;
        
        case "GET":
        default:
            data_ = await fetch(url+params.url, {
            method: 'GET',
            headers: params.headers || headers,
            body: null
            });
            break;
    }
    return data_.json();

};
  