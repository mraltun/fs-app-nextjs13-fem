// Just a delay API call so we can see the loading state etc..
export const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });
