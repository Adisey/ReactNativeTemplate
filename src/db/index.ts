import {
  ResultSet,
  SQLError,
  Transaction,
  openDatabase,
} from 'react-native-sqlite-storage';

const dbName = 'db_sqlite';

const db = openDatabase(
  {
    name: dbName,
    location: 'Library',
  },
  () => {
    console.log(
      new Date().toISOString(),
      '-(DB)->',
      dbName,
      `connection successful`,
    );
  },
  (error: SQLError) => {
    console.log(
      new Date().toISOString(),
      '-(DB)- >',
      dbName,
      `connection error->`,
      error,
    );
  },
);

export const createTables = async (content: string): Promise<void> => {
  await db.transaction((txn: Transaction) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS app_params (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), value VARCHAR(500))`,
      [],
      (_: Transaction, resultSet: ResultSet) => {
        console.log(
          content,
          '->table "app_params" created successfully',
          _,
          resultSet,
        );
      },
      (transaction: Transaction, error: SQLError) => {
        console.error(content, '->error on creating table "app_params"', error);
      },
    );
  });
};

type IAppParamId = number | undefined;
type IAppParamName = 'tokenAccess' | 'tokenRefresh' | 'colorTheme';
type IAppParamValue = string | undefined;

type IAppParamsItem = {
  id: IAppParamId;
  name: IAppParamName;
  value: IAppParamValue;
};

const queryAsync = async (
  query: string,
  args: any[] = [],
): Promise<ResultSet> => {
  return new Promise<ResultSet>((resolve, reject): void => {
    db.transaction((tx: Transaction): void => {
      tx.executeSql(
        query,
        args,
        (_txTransaction: Transaction, res: ResultSet): void => {
          // console.log(Date.now(), { query, args, res, _txTransaction });
          // console.log(Date.now(), `-`.repeat(50));
          resolve(res);
        },
        (_tx: Transaction, error: SQLError): void => {
          console.log(Date.now(), { query, args, error, _tx });
          console.error(Date.now(), error);
          reject(error);
        },
      );
    });
  });
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
