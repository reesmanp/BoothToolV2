const NEW_CONN = 'NEW_CONN';
const newConn = (key, value) => ({
  type: NEW_CONN,
  key: key,
  value: value
});

export const connActions = {
  NEW_CONN: NEW_CONN,
  newConn: newConn
};
