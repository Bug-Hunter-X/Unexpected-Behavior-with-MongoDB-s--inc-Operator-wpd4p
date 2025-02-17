```javascript
// Correct usage of $inc operator with upsert
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}},{upsert:true});
```