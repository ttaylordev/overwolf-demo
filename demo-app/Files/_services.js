getSomeStuff = function () {
  console.log("getSomeStuff was called");
  return $http({
      method: 'GET',
      url: '/customer'
    })
    .then(function (response) {
      console.log(".then recieved a response");
      console.log(response);
      return response;
    });
};


function httpGetAsync(callback)
{
  var thisUrl = "localhost:8082";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", thisUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}