const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 3. Edit an organization

const orgId = "73eac1cf-9703-47ec-b89f-51dd5084487d";

let params = {
  TableName: "project-management",
  Key: { PK: `ORG#${orgId}`, SK: `#METADATA#${orgId}` },
  UpdateExpression: "set #org_id = :org_id",
  ExpressionAttributeNames: { "#org_id": "org_id" },
  ExpressionAttributeValues: {
    ":org_id": orgId,
  },
};

dynamodb.update(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
