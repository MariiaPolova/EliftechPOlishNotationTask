function MainProcessingFunction(){
  SendGetRequest();

}

function ProcessRequest (e) {
  if(e.target.readyState == 4 && e.target.status == 200){
    console.log(this.responseText);
    var json = JSON.parse(this.responseText);
    var responseArray = [];
    for (var i = 0; i < json.expressions.length; i++) {
      responseArray.push(calculateTestCase(json.expressions[i]));
    }

    SendPostRequest(responseArray, json.id);
    }

}

function SendGetRequest() {
  var getReqObj = new XMLHttpRequest();
  getReqObj.open("GET", "https://www.eliftech.com/school-task");
  getReqObj.send();
  getReqObj.onreadystatechange = ProcessRequest;
}

function SendPostRequest(array, id) {

  var postReqObj = new XMLHttpRequest();
  postReqObj.open("POST", "https://www.eliftech.com/school-task");
  postReqObj.setRequestHeader("Content-type", "application/json");
  postReqObj.send(JSON.stringify({id: id, results: array }));
  console.log(JSON.stringify({id: id, results: array}));

postReqObj.onreadystatechange = ProcessPostRequest;
}

function ProcessPostRequest(e){
  if (e.target.readyState == 4 && e.target.status == 200) {
      console.log(this.response);
    }
}
