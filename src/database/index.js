import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

export async function createDatabase() {
  console.log('DatabaseService: creating database..');
  const db = await createRxDatabase({
    name: 'todosdb',
    storage: getRxStorageDexie()
  });
  console.log('DatabaseService: created database');

  // create collections
  console.log('DatabaseService: create collections');

  const todoSchema = {
    version: 0,
    primaryKey: "id",
    type: "object",
    properties: {
      id: {
        type: "string",
        maxLength: 100, // <- the primary key must have set maxLength
      },
      name: {
        type: "string",
      },
      done: {
        type: "boolean",
      },
      timestamp: {
        type: "string",
        format: "date-time",
      },
    },
    required: ["id", "name", "done", "timestamp"],
  };

  await db.addCollections({
    todos: {
        schema: todoSchema,
      },
  });

  return {
    install(app) {
      app.provide(db);
    },
  };
}