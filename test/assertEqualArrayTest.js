const assertArraysEqual = require('../assertArraysEqual')
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 8, 3], [1, 6, 5]);
assertArraysEqual([1, 8, 3], [1, 8, "3"]);