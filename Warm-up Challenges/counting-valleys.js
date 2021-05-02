/**

steps          : 8
path           : UDDDUDUU
previous level : 0
current level  : 0
valleys        : 0
condition      : previous level is -1 and current level is 0 

+----+-------+----------------+---------------+------------------+---------+
| Nr |  step | previous level | current level | pl = -1 & cl = 0 | valleys |
+----+-------+----------------+---------------+------------------+---------+
| 1  |   U   | 0              | 0 + 1 = 1     | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 2  |   D   | 1              | 1 - 1 = 0     | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 3  |   D   | 0              | 0 - 1 = -1    | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 4  |   D   | -1             | -1 - 1 = -2   | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 5  |   U   | -2             | -2 + 1 = -1   | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 6  |   D   | -1             | -1 - 1 = -2   | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 7  |   U   | -2             | -2 + 1 = -1   | false            |  0      |
+----+-------+----------------+---------------+------------------+---------+
| 8  |   U   | -1             | -1 + 1 = 0    | true             | 0+1 = 1 |
+----+-------+----------------+---------------+------------------+---------+
 
*/

function countingValleys(steps, path) {
  let previousLevel = 0;
  let currentLevel = 0;
  let valleys = 0;

  for (let index = 0; index < steps; index++) {
    const step = path.charAt(index);
    currentLevel = step === "U" ? currentLevel + 1 : currentLevel - 1;

    if (previousLevel === -1 && currentLevel === 0) {
      valleys += 1;
    }

    previousLevel = currentLevel;
  }

  return valleys;
}

console.log(countingValleys(8, "UDDDUDUU")); // 1
console.log(countingValleys(8, "DDUUDDUU")); // 2
