import { queryAsync } from '../db';

type IAppParamId = number | undefined;
type IAppParamName = 'tokenAccess' | 'tokenRefresh' | 'colorTheme';
type IAppParamValue = string | undefined;

type IAppParamsItem = {
  id: IAppParamId;
  name: IAppParamName;
  value: IAppParamValue;
};

export const createAppParamsTables = async (): Promise<void> => {
  await queryAsync(
    'CREATE TABLE IF NOT EXISTS app_params (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), value VARCHAR(500))',
  );
};

export const getAllParams = async (): Promise<IAppParamsItem[]> => {
  const res = await queryAsync('SELECT * FROM app_params ORDER BY id DESC');
  return res.rows.raw().map(i => i) || [];
};

const getParams = async (name: IAppParamName): Promise<IAppParamValue> => {
  const res = await queryAsync('SELECT * FROM app_params WHERE name = ?', [
    name,
  ]);
  const { rows } = res;
  let value: IAppParamValue;
  if (rows.length) {
    value = rows.item(0).value;
  }

  return value;
};
export const saveParams = async (
  name: IAppParamName,
  value: IAppParamValue,
): Promise<IAppParamsItem> => {
  let id: IAppParamId = undefined;
  let item: IAppParamsItem = { id: id, name, value };
  const resSelect = await queryAsync(
    'SELECT * FROM app_params WHERE name = ?',
    [name],
  );
  const { rows: selectRows } = resSelect;
  if (selectRows.length) {
    id = selectRows.item(0).id;
  }
  const query =
    id !== undefined
      ? 'UPDATE app_params SET value = ? WHERE id = ?'
      : 'INSERT INTO app_params (name, value) VALUES (?,?)';
  const args = id !== undefined ? [value, id] : [name, value];
  const res = await queryAsync(query, args);
  const { insertId, rowsAffected } = res;
  if (insertId) {
    item.id = insertId;
  } else if (rowsAffected) {
    item.id = id;
  }
  return item;
};
