import {
  ResultSet,
  SQLError,
  Transaction,
  openDatabase,
} from 'react-native-sqlite-storage';
import { createAppParamsTables } from './appParams';

export * from './appParams';

const dbName = 'db_sqlite';
export const db = openDatabase(
  {
    name: dbName,
    location: 'Library',
  },
  () => {
    console.log(new Date().toISOString(), dbName, `connection successful`);
  },
  (error: SQLError) => {
    console.log(
      new Date().toISOString(),
      'DB:',
      dbName,
      `connection error`,
      error,
    );
  },
);

export const createTables = async (): Promise<void> => {
  await createAppParamsTables();
};

export const queryAsync = async (
  query: string,
  args: any[] = [],
): Promise<ResultSet> => {
  return new Promise<ResultSet>((resolve, reject): void => {
    db.transaction((tx: Transaction): void => {
      tx.executeSql(
        query,
        args,
        (_txTransaction: Transaction, res: ResultSet): void => {
          // console.log(Date.now(), query, `-`.repeat(100));
          // console.log(Date.now(), { query, args, res, _txTransaction });
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
