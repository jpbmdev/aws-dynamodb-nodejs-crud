const { v4 } = require("uuid");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. Create Organization
const orgId = v4();

let params = {
  TableName: "project-management",
  Item: {
    PK: `ORG#${orgId}`,
    SK: `#METADATA#${orgId}`,
    name: "ABC ing",
    tier: "free-tier",
  },
};

dynamodb.put(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
