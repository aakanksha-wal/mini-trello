import axiosInstance from './index';

export const getListingAPI = () => {
    return axiosInstance()({
        method: 'GET',
        url: `list`,
    });
};

export const reprioritizeTaskAPI = (params) => {
    return axiosInstance()({
        method: 'GET',
        url: `list`,
        params
    });
}

export const changeTaskStatusAPI = (params) => {
    return axiosInstance()({
        method: 'GET',
        url: `list`,
        params
    });
}

