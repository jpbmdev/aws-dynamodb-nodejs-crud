const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. Create employee

const orgId = "d41869a7-3900-4daa-8a05-771f19e12e97";
const projId = "d44c463b-27fa-4705-ab9f-210b0e2efed6";
const empId = "157c265c-ff82-4f33-8d55-8d7947de98ec";

let params = {
  TableName: "project-management",
  Item: {
    PK: `ORG#${orgId}#PRO#${projId}`,
    SK: `ORG#${orgId}#EMP#${empId}`,
    name: "Jane",
    project: "Proyect Y",
    date_of_join: new Date().toUTCString(),
  },
};

dynamodb.put(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
