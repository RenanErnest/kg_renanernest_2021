/*
One approach is to take the command line arguments and to have a mapper which can be an object like a dictionary
or in this specific problem it can be an array of strings where each index i maps to the phonetic representation
of the i integer, then this array would have 10 elements to represent the range from 0 to 9 inclusively.
With that we can traverse the array of integers and either keep printing the mapped phonetic integer or store it
in a new array.
Assuming we map each of integers from 0 to 9 to only one respectivelly phonetic representation our time complexity
will be O(n) where n is the number of integers received as input. The space complexity will depend on storing or not
the new mapped values to an array, if so, it would be O(n) as well. But if we are concerning about space we can just 
print the values without storing them inside the algorithm, doing that we would reduce our space complexity to O(1).

Chosen approach:
Time complexity - O(n)
Space complexity - O(1)
*/