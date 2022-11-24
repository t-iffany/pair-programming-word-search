// Pair programming word search activity

const transpose = function(matrix) {
  let results = [];
  const rows = matrix.length;
  const columns = matrix[0].length;

  // Loop through each array of the matrix by columns
  for (const array of matrix) {
    for (let i = 0; i < columns; i++) {

      if (results[i] === undefined) results.push([]);
      results[i].push(array[i]);
    }
  }
  return results;
};

const wordSearch = (letters, word) => {
  if (!word || !letters || !letters.length) {
    return false;
  }

  let verticalValues = transpose(letters);

  if (horizontalSearch(letters, word) || horizontalSearch(verticalValues, word)) {
    return true;
  }

  return false;
};

const horizontalSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch;

