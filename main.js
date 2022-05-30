const points = [1, 40, 100, 5, 25, 10, 108];


document.querySelector("#array").innerHTML = points;

function numSort(arrayName) {
  for (var i=0; i <= arrayName.length; i++)   {
    const arrayTwo = arrayName.map(myFunc);
  }

  function myFunc(values, index, arrray){
    if(arrayName[index] < arrayName[index + 1]){
      let temp = arrayName[index];
      arrayName[index] = arrayName[index + 1];
      arrayName[index + 1] = temp;
    }
  }
  return arrayName;
}

let sorted = numSort(points);


function clickSort(){
    
    document.querySelector("#sorted").innerHTML = "The sorted array is " + sorted;

    document.querySelector("#longest").innerHTML = "The highest number in the array is " + sorted[0];
}