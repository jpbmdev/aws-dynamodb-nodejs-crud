const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Find Employees of a proyect

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";
const projId = "5d651d29-b887-4299-8c48-56b4228be6b7";

let params = {
  TableName: "project-management",
  KeyConditionExpression: "PK = :PK",
  ExpressionAttributeValues: {
    ":PK": `ORG#${orgId}#PRO#${projId}`,
  },
};

dynamodb.query(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
