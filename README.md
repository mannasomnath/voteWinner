# voteWinner
Simple JS code to find the winner in an election.
This particular code is used to decide the winner in an election where many candidates contested.
We have an array containing the list of names of all the candidates who contested this election.
So we can have multiple occurrences of the same name in the array. The maximum occurring name in the array would be the winner of the election. If there a tie between the candidates then the list with the names of the tied candidates would be sorted in ascending order and the last item the array would be declared as the winner of the election.
This particular javascript function takes an array of names and returns the name of the winner.
So suppose we have the below array of names with us.
["John", "Paul", "Tom", "John", "Tom", "Jerry", "Paul", "Bob", "Donald", "Daisy"].
Then as per this function the winner would be Tom.
