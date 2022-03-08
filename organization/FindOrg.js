const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 3. Edit an organization

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";

let params = {
  TableName: "project-management",
  Key: { PK: `ORG#${orgId}`, SK: `#METADATA#${orgId}` },
};

dynamodb.get(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
