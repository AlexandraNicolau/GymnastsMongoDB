const mongodb = require("mongodb");

let uri =
  "mongodb+srv://appservice:Nabarro123@cluster0-c9vlg.mongodb.net/test?retryWrites=true";

function connect(database) {
  return mongodb.MongoClient.connect(uri).then(client => {
    return client.db(database);
  });
}

module.exports = connect;
