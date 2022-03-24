export const clearQueryParams = () => {
    window.history.pushState({}, '', window.location.pathname);
}

export const getQueryParam = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

export const setQueryParam = (name, value) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(name, value);
    window.history.replaceState({}, '', `?${urlParams.toString()}`);
}

export const createQueryParams = (params) => {
    const urlParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
        urlParams.set(key, params[key]);
    });
    return urlParams.toString();
}