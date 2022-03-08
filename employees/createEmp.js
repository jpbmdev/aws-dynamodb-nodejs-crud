const { v4 } = require("uuid");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. Create employee

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";
const empId = v4();
const name = "Jane";

let params = {
  TableName: "project-management",
  Item: {
    PK: `ORG#${orgId}`,
    SK: `EMP#${empId}`,
    name: name,
    email: "Dir",
    Data: `EMP#${name}`,
  },
};

dynamodb.put(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
