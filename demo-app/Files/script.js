function dragResize(edge){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.dragResize(result.window.id, edge);
    }
  });
};

function dragMove(){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.dragMove(result.window.id);
    }
  });
};

function closeWindow(){
  console.log("closeWindow was called");
  console.log(overwolf);
  console.log(overwolf.windows);
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.close(result.window.id);
    }
  });
};

function openSubWindow(){
  alert("the subwindow will only be visible inside a game");
  overwolf.windows.obtainDeclaredWindow("SubWindow", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

function takeScreenshot(){
  overwolf.media.takeScreenshot(function(result){
    if (result.status == "success"){
      var img = document.getElementById("screenshot");
      img.src = result.url;
      img.onload = function() {
        overwolf.media.shareImage(img, "Screen Shot");
      };
    }
  });
};

function logStuff() {
  console.log("windows", overwolf.windows);
  console.log("streaming", overwolf.streaming);
  console.log("settings ", overwolf.settings );
  console.log("games", overwolf.games);
  console.log("media", overwolf.media);
  console.log("extensions", overwolf.extensions);
  console.log("profile", overwolf.profile);
  console.log("utils", overwolf.utils);
  console.log("benchmarking", overwolf.benchmarking);
  console.log("io", overwolf.io);
  console.log("web", overwolf.web);
  console.log("logitech", overwolf.logitech);
  console.log("version", overwolf.version);
};

function currentTime() {
  var timestamp = new Date();
  console.log(timestamp);
};

function getLanguage() {
 var lang =  overwolf.settings.getCurrentOverwolfLanguage(console.log());
 console.log(lang);
 currentTime();
}

function runTeamSpeak(){
  overwolf.extensions.launch("lafgmhfbkjljkgoggomibmhlpijaofafbdhpjgif");
};