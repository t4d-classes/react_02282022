# Exercise 8

## Requirements

1. Add a new column to the Car Table. The column header should be set to "Actions".

2. On each row in the new column, add a Delete button. When the Delete button is clicked, delete the row from the table.

Hint: To perform a delete in JavaScript, look at the array filter function.

```javascript
newCars = cars.filter(c => c.id !== carIdToDelete);
```

3. Ensure it works!