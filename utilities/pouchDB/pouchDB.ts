import { PocketDB, Collection } from 'pocketdb';
import { connActions as Actions } from '../../views/actions';

const db = new PocketDB('./db');

export const connectToCollection = (collection: string, dispatch: any) => (
  dispatch(Actions.newConn(collection, new Collection(db, collection)))
);
