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

export const showInfo = pod => {
  return {
    type: "INFO",
    pod
  };
};


export const draggingRecord = pod => {
  if (pod) {
    return {
      type: "DRAGGING",
      pod
    };
  }
  return {
    type: "INFO"
  }

};

export const editRecord = pod => {
  return {
    type: "EDITING",
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
