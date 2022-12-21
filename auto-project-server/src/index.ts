import * as dotenv from 'dotenv'
import express from 'express';
import mongodb from 'mongodb';
import { Auto } from './interface/Auto.interface';

dotenv.config();
const app = express();

const url = process.env.SERVER_URL;
const dbName = process.env.DATABASE_NAME;
const port = process.env.PORT;


let db: mongodb.Db;
interface CustomMongoClientOptions extends mongodb.MongoClientOptions {
  useUnifiedTopology: boolean;
}

const options: CustomMongoClientOptions = {
  useUnifiedTopology: true
};

mongodb.MongoClient.connect(url as string, options, (err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  db = client!.db(dbName);
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
});

app.use(express.json());

app.post('/autos', (req, res) => {
  const newAuto: Auto = req.body;
  db.collection('autos').insertOne(newAuto, (err: any, result: any) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting new auto');
    } else {
      res.send(`Added new auto: ${newAuto.brand} ${newAuto.model}`);
    }
  });
});

app.delete('/autos/:id', (req, res) => {
  const id = req.params.id;
  db.collection('autos').deleteOne({ id: id }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting auto');
    } else if (result!.deletedCount === 0) {
      res.status(404).send('Auto not found');
    } else {
      res.send(`Deleted auto with id: ${id}`);
    }
  });
});

app.get('/autos', (req, res) => {
  let sort: mongodb.Sort = {};
  if (req.query.sort === 'asc') {
    sort = { make: 1 };
  } else if (req.query.sort === 'desc') {
    sort = { make: -1 };
  }
  db.collection('autos').find().sort(sort).toArray((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting autos');
    } else {
      res.send(result);
    }
  });
});
