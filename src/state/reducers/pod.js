const initialState = {
  name: "P1",
  records: [],
  available: [1, 2, 3, 4]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOCKED":
      const oldrecord = state.records.filter(
        rec => rec.name === action.record
      )[0];
      const record = Object.assign({}, oldrecord, {
        [action.field]: action.input
      });
      const records = state.records.filter(rec => rec.name !== action.record);
      return Object.assign({}, state, {
        records: [...records, record]
      });
    case "DRAGGED":
      const newRecord = { name: action.pod };
      return Object.assign({}, state, {
        available: state.available.filter(rec => rec != action.pod),
        records: [...state.records, newRecord],
        record: newRecord
      });
    case "INPUT":
      return Object.assign({}, state, {
        [action.field]: action.input
      });
    default:
      return state;
  }
};
