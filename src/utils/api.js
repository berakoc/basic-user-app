import { ApiQueryKey } from './constants';
import { tap } from './function';
import { getQueryParam } from './query';

const defaultErrorHandler = (error) => {
  console.error(error);
};

const defaultSuccessHandler = (response) => {
  console.log(response);
};

export const handleApiRequest = (
  url,
  method,
  data,
  successHandler = defaultSuccessHandler,
  errorHandler = defaultErrorHandler
) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return fetch(getQueryParam(ApiQueryKey)?.concat(url), options)
    .then(
      tap((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      })
    )
    .then((response) => response.json())
    .then(successHandler)
    .catch(errorHandler);
};
