const async = store => next => action => {
  // if action doesn't have a payload or payload doesnt have a then property
  // we don't care about it and can send it on
  if(!action.payload || !action.payload.then) {
    return next(action);
  }

  // make sure the promise resolves, construct new action, dispatch it
  // to restart the process until we finish all middlewares
  action.payload.then(response => {
    const newAction = { ...action, payload: response }
    store.dispatch(newAction);
  });
};

export default async;
