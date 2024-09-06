import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

export async function GET(request: Request) {
    const tableName = "mp_miscellaneous";
    const client = DynamoDBDocument.from(
      new DynamoDBClient({
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
        region: process.env.REGION!,
      })
    );
  
    try {
      const getItemCommand = new GetItemCommand({
        TableName: tableName,
        Key: { objectKey: { S: "key-generation-history" } },
      });
  
      const response = await client.send(getItemCommand);
      if (response.Item) {
        const unmarshalledItem = unmarshall(response.Item);
        console.log("GetItem successful:", JSON.stringify(unmarshalledItem));
        return new Response(JSON.stringify({ success: true, data: unmarshalledItem }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        return new Response(JSON.stringify({ success: false, message: "Item not found" }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
    } catch (error) {
      console.error("GetItem failed:", error.message);
      return new Response(JSON.stringify({ success: false, message: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
