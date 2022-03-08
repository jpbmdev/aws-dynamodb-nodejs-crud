const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Find Proyects of Employee

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";
const empId = "14934109-b290-4bfe-97c0-39754157ad0d";

let params = {
  TableName: "project-management",
  IndexName: "SK-PK-index",
  KeyConditionExpression: "SK = :SK",
  ExpressionAttributeValues: {
    ":SK": `ORG#${orgId}#EMP#${empId}`,
  },
};

dynamodb.query(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
