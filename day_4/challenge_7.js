​
/*
CHALLENGE 7: Node Phone Book
​
Using Node, you can make a phone book app similar to what we've done with Ruby in the past. 
Present the user with a few options:
1 - List all users in the phone book
2 - Search for a user in the phone book
    - This will prompt the user to choose one of the following:
        1 - Search by full name
        2 - Search by first name
        3 - Search by family name
            - The user types in the respective name, and then you must loop through the phonebook and show all properties of only the entries that have a matching value
3 - Exit
​
Separate the app's functionality into specific functions, such as "searchByFamilyName(familyName)".
The app must repeat until the user selects "3 - Exit".
​
​
*/
var templatePhoneBookEntry = {
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 27,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021-3100"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "212 555-1234"
      },
      {
        "type": "office",
        "number": "646 555-4567"
      },
      {
        "type": "mobile",
        "number": "123 456-7890"
      }
    ],
    "children": [],
    "spouse": null
  }
​
var phoneBook = []; // push new copies of the template entry into this array for the app to work
​