const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Find EmpbyName

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";
const empName = "Mando";

let params = {
  TableName: "project-management",
  IndexName: "PK-Data-index",
  KeyConditionExpression: "#PK = :PK and begins_with(#Data, :Data)",
  ExpressionAttributeNames: { "#PK": "PK", "#Data": "Data" },
  ExpressionAttributeValues: {
    ":PK": `ORG#${orgId}`,
    ":Data": `EMP#${empName}`,
  },
};

dynamodb.query(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
