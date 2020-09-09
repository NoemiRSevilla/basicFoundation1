function test(){
    console.log(first([-3, 5, -2, 6, -1, 7, 8, 9, -4, 0]));// Basic Foundation 1

[1]
// Get 1-255

function first(){
  var arr =[];
	for(var i=0; i<=255; i++){
		arr.push(i);
	}
	return(arr);
}

console.log(first());

[2]
function second(){
  var sum = 0;
  for (var i=0; i<=1000; i++){
    if (i % 2===0){
      sum+=i;
    }
  }
  return sum;
}

console.log(second());

[3]
function third(){
  var sum=0;
  for (var i=0; i<=5000; i++){
    if (i%2==1){
      sum+=i;
    }
  }
  return sum;
}  

console.log(third());

[4]
function fourth() {
    var arr = [3, 1, 437198, 6587];
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(fourth());

[5]
function fifth(){
  var arr= [1, 8, 6, 362178, 9];
  var max = arr[0];
  for (var i=0; i<=arr.length; i++){
    if (max <= arr[i]){
      max=arr[i];
      }
    }
  return max;
  }
  console.log(fifth());

  [6]
function sixth(arr){
  var sum = 0;
  for (var i=0; i<arr.length-1; i++){
    sum+=arr[i];
  }
  var avg = sum/arr.length;
  return avg;
}

console.log(sixth([789, 1223, 809, 12398]));

[7]
function seven(){
  var arr=[];
  for (var i=1; i<50; i++){
    if (i%2!=0){
      arr.push(i);
    }
  }
  return arr;
}

console.log(seven());

[8]
function eigth (arr, y){
  var count = 0;
  for (i=0; i<=arr.length; i++){
    if(arr[i]>y){
      count+=1;
    }
  }
  return count;
}

console.log (eigth([4,3,2,8,2,654654,234], 55));

[9]
function squares (arr){
  for (var idx=0; idx<arr.length; idx++){
    arr[idx]=arr[idx]*arr[idx];
  }
  return arr;
}


console.log(squares([1,2,3,4,5]));

[10]

function ten(arr){
  for (var i=0; i<arr.length; i++){
    if (arr[i]<0){
      arr[i]=0;
    }
  }
  return arr;
}
console.log(ten([-321, 432, -432, 444, -321312, -3424, -5]));

[11]

function eleven (arr){
  var max=arr[0];
  var min=arr[0];
  var sum=0;
  for (var idx=0; idx<arr.length;idx++){
    if (arr[idx]>max){
      max=arr[idx];
      
    }
    if (arr[idx]<min){
      min=arr[idx];
      
    }
    sum+=arr[idx];
    var avg=sum/arr.length;
    
  }
  var New = [max, min, avg]
  return New; 
}
console.log(eleven([5,2312,3,5,7,1322]));

[12]
function swap (arr){
  temp=arr[0];
  arr[0]=arr[arr.length-1];
  arr[arr.length-1]= temp;
  return arr
}

console.log(swap([-3424,2,-4132,432,12]));

[13]
function thirteen(arr){
  for (var idx=0; idx<arr.length;idx++){
    if (arr[idx]<0){
      arr[idx]='Dojo';
    }
  }
  return arr;
}

console.log(thirteen([-1,-53454,2342,132,-5435]));