## StreamX

***A client/server architecture for requesting JSON data and creating a stream SHA output***

A client makes a GET request on the route `http://localhost:8080/age-counting` which contains a data key and the value is a string which contains items in the format: `key=STRING, age=INTEGER`. It counts how many items exist that have an age equal to a number (for e.g 32). 
 
It also creates a write stream to a file called `output.txt` and the contents should be the key values (from the JSON) each on a separate line in the order they appeared in the JSON data (the file should end with a newline character on its own line). 
 
It Finally then outputs the SHA1 hash of the file.

### How to run

#### Run Server on terminal
```
node server.js
```
#### Run Client on terminal
```
node age-counter.js
```

### Example JSON response (endpoint - /age-counting)
```
{"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}
```

### File Contents (output.txt)
```
IAfpK
9snd2
```

### Example SHA Output
```
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
```