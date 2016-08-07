/**
 * Created by vimalkumar on 7/30/2016.
 */
var print=console.log;

function  Person(first,middle,last) {
    this.first=first;
    this.middle=middle;
    this.last=last;
    this.initials= initials
}

function  initials() {
    return this.first + this.middle + this.last
}

var aPerson= new Person("John","Quincy","Public");
console.log(aPerson.initials());

var numbers = 3;
var arr = [7,4,1776];
console.log(Array.isArray(numbers)); // displays false
print(Array.isArray(arr)); // displays true

//Array - push to end of array
// Unshift - add to start of array
var num=[1,2,3,4,5,6]
num.push(7)
num.unshift(1,2)
print(num)

num.pop() // pop from end of arary
num.shift()  //pop from start fo array

//Array splice 1.The starting index 2. number of element to remove if 0 insert the elemenet 3.  The elements to add in array

var num = [1,2,3,4,5,6]
num.reverse()

var num=[1,100,101,2,3,4]
//Array sort data in lexicographically order
function compare (num1,num2){
    return num2-num1
}

num.sort(compare)
print(num)

function square(num){
    print(num*num)
}
num.forEach(square)

//every() applies boolean function to an array and return true if function can
// return true for every element in the array
function isEven(num){
    return num%2 ==0
}
num.every(isEven)

//Some() if atleast one of the element in the array is true
num.some(isEven)

//reduce() applies function to an accumulator yield single value
function add(t,c){
    return t+c
}
var sum = num.reduce(add)

//reduce works left to right
// reduceRight() works right to left

//Iterator function that return a new array
//  map , filter
function curve(grade){
    return grade+=5
}
var grades=[77,33,44,55,66]
grades.map(curve)

//filter
nums.filters(isEven)

function afterc(str){
    if(str.indexOf("cle")>-1){
        return true
    }
    return false;
}
var words=["recieve","deceive"]
words.filter(afterc)

//2D Array

Array.matrix= function(numrows,numcols,initial){
    var arr=[];
    for(var i=0;i<numrows;++i){
        var column=[];
        for(var j=0;j<numcols;++j){
            column[j]=initial;
        }
        arr[i]=column
    }
    return arr;
}

//Jagged Array - the row may have a diferent number of elements
//Array of object

function weektemps(){
    this.datastore=[];
    this.add= add;
    this.average= average;
}

function add(temp){
    this.datastore.push(temp)
}
function average(){
    
}