# Unexpected Behavior with MongoDB's $inc Operator

This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB.  The issue arises when attempting to increment a field that does not exist in the document.  This often results in the creation of a field with an unexpected value, or worse, no change at all.

## Problem Description

The provided code uses `db.collection.updateOne` with the `$inc` operator to increment a counter field. If the document specified by the query doesn't exist, the `$inc` operation won't create the document. To solve this, you have to use the upsert option with `updateOne`

## Solution

The solution involves using the `upsert: true` option in `updateOne`. This ensures that if the document doesn't exist, it is created before incrementing the counter. This addresses the issue and prevents unexpected behavior.