const { v4 } = require("uuid");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 2. Create a proyect

const orgId = "73eac1cf-9703-47ec-b89f-51dd5084487d";
const projectId = v4();
const name = "Proyect B";

let params = {
  TableName: "project-management",
  Item: {
    PK: `ORG#${orgId}`,
    SK: `PRO#agile#${projectId}`,
    name: name,
    proyect_id: projectId,
    Data: `PRO#${name}`,
  },
};

dynamodb.put(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
