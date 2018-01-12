export const changePodName = (field, input) => {
  return {
    type: "INPUT",
    field,
    input
  };
};

export const addRecord = pod => {
  return {
    type: "ADD",
    pod
  };
};

export const draggedRecord = pod => {
  return {
    type: "DRAGGED",
    pod
  };
};

export const draggingRecord = pod => {
  return {
    type: "DRAGGING",
    pod
  };
};

export const lockVersion = (field, input, record) => {
  return {
    type: "LOCKED",
    field,
    input,
    record
  };
};

export const save = pod => {
  return {
    type: "SAVED",
    pod
  };
};

const timer = () => {
  return {
    type: "PUBLISHED"
  };
};

export const published = () => {
  return dispatch => {
    setTimeout(() => {
      return dispatch(timer());
    }, 5000);
  };
};

export const publish = pod => {
  return {
    type: "PUBLISHING",
    pod
  };
};
