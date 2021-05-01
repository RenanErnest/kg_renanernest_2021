/*
One approach is to take the command line arguments and to have a mapper which can be an object like a dictionary
or in this specific problem it can be an array of strings where each index i maps to the phonetic representation
of the i integer, then this array would have 10 elements to represent the range from 0 to 9 inclusively.
With that we can traverse the array of integers and either keep printing the mapped phonetic integer or store it
in a new array.
Assuming we map each of integers from 0 to 9 to only one respectivelly phonetic representation our time complexity
will be O(n*m) following the array or mapper object approach where n is the number of integers received as input and
m is the size of the longest number in terms of characters. We can also consider this time complexity as O(n) where n 
is the number of numeric characters in the input, but we will stick to the O(n*m) representation. The space complexity 
will depend on storing or not the new mapped values to an array, if so, it would be O(n) where n is the number of integers 
received as input. But if we are concerning about space we can just print the values without storing them inside the algorithm, 
doing that we would reduce our space complexity to O(1).

Chosen approach:
Time complexity - O(n*m) where n is the number of integers received as input and m is the size of the longest integer in terms of digit
Space complexity - O(1)

Note: my intention was having a branch main on my repo and then checkout to a new branch named feature, publish the commits there and do 
a pull request into main. However I messed up in the beggining creating the branch feature before main.
Now I published the main branch and configured it to be the default branch. This last commit adding this note will be pull requested to main.
Sorry for that.
*/

const inputNumbers = process.argv.slice(2);
const phoneticMapper = {
	'0': 'Zero',
	'1': 'One',
	'2': 'Two',
	'3': 'Three',
	'4': 'Four',
	'5': 'Five',
	'6': 'Six',
	'7': 'Seven',
	'8': 'Eight',
	'9': 'Nine'
};

function numericToPhonetic(numbers, phoneticMapper) {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers[i].length; j++) {
			// print the mapped phonetic representation of a digit
			process.stdout.write(phoneticMapper[numbers[i][j]]);
		}
		// print comma to separate integers
		if (i < numbers.length - 1) {
			process.stdout.write(',');
		}
		else {
			process.stdout.write('\n');
		}
	}
}

numericToPhonetic(inputNumbers, phoneticMapper);
