export const BASE_URL = 'http://localhost:4000/api/v1/'
export const IMG_URL = 'https://image.tmdb.org/t/p/original'
export const GET_FETCH = {
    method:'GET',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        Authorization: `Bearer ${localStorage.token}`
    }
}
export const DELETE_FETCH = {
    method:'DELETE',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        Authorization: `Bearer ${localStorage.token}`
    }
}

export const POST_FETCH = {
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        Authorization: `Bearer ${localStorage.token}`
    }
}

export const Headers = {
    'Content-Type':'application/json',
    Accept:'application/json',
    Authorization: `Bearer ${localStorage.token}`
}