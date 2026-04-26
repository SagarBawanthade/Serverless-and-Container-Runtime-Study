const express = require("express");
const app = express();

app.get("/fast", (req, res) => {
  res.send("Hello World");
});

app.get("/cpu", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  res.send("CPU Task Done");
});

app.get("/io", async (req, res) => {
  await new Promise(r => setTimeout(r, 200));
  res.send("IO Task Done");
});

app.listen(3000, () => console.log("Server running"));







sagarbawanthade@fedora:~/Downloads/Testing$ sudo dnf install httpd-tools
Updating and loading repositories:
Repositories loaded.
Package "httpd-tools-2.4.66-1.fc43.x86_64" is already installed.

Nothing to do.
sagarbawanthade@fedora:~/Downloads/Testing$ ab -n 1000 -c 50 http://localhost:3000/fast
ab -n 500 -c 20 http://localhost:3000/cpu
ab -n 500 -c 20 http://localhost:3000/io
This is ApacheBench, Version 2.3 <$Revision: 1923142 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /fast
Document Length:        11 bytes

Concurrency Level:      50
Time taken for tests:   0.892 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      210000 bytes
HTML transferred:       11000 bytes
Requests per second:    1121.64 [#/sec] (mean)
Time per request:       44.577 [ms] (mean)
Time per request:       0.892 [ms] (mean, across all concurrent requests)
Transfer rate:          230.02 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   1.9      2      11
Processing:    15   41  27.5     31     147
Waiting:        8   26  18.0     22     128
Total:         17   43  28.7     33     153

Percentage of the requests served within a certain time (ms)
  50%     33
  66%     37
  75%     39
  80%     39
  90%    100
  95%    143
  98%    148
  99%    151
 100%    153 (longest request)
This is ApacheBench, Version 2.3 <$Revision: 1923142 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)


