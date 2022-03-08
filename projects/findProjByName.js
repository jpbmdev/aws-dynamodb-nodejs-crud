const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Find Project by Name

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";
const projName = "Proyect X";

let params = {
  TableName: "project-management",
  IndexName: "PK-Data-index",
  KeyConditionExpression: "#PK = :PK and begins_with(#Data, :Data)",
  ExpressionAttributeNames: { "#PK": "PK", "#Data": "Data" },
  ExpressionAttributeValues: {
    ":PK": `ORG#${orgId}`,
    ":Data": `PRO#${projName}`,
  },
};

dynamodb.query(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
