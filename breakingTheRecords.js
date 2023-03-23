// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
// Example:
// scores =[12,24,10,24]



scores =[12,24,10,24]
function breakingRecords(scores) {
    let min = scores[0];
    let minCount = 0;
    let max = scores[0];
    let maxCount = 0;
    let results = [];
    
    for(let score of scores) {
        if(score < min) {
            min = score;
            minCount++
            console.log('min: ' + min + ' min count: ' + minCount)
        } else if(score > max) {
            max = score;
            maxCount++
            console.log('max: ' + max + ' max count: ' + maxCount)
        }
    }
    
    results.push(maxCount);
    results.push(minCount);
// return results;
console.log(results);
}

breakingRecords(scores)