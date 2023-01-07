/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

arr.map(PrintDeveloperswithMap);
function PrintDeveloperswithMap(item) {
  if(item.profession == "developer"){
    console.log(item);
  }

}

function PrintDeveloperbyForEach() {
  
}

function addData() {
  let newele = {id: 4, name: "susan", age: "20", profession: "intern"}
  arr.push(newele);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
}
