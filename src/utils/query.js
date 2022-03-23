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