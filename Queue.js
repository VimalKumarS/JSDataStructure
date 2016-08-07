/**
 * Created by vimalkumar on 7/30/2016.
 */
function Queue(){
    this.dataStore=[];
    this.enqueue= enqueue;
    this.dequeue= dequeue;
    this.fromt= front;
    this.back= back;
    this.toString=toString;
    this.empty=empty;

}

function enqueue(element){
    this.dataStore.push(element)
}
function dequeue(){
    return this.dataStore.shift()
}

function  front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1]
}

function empty() {
    if(this.dataStore.length==0){
        return true;
    }
    else{
        return false;
    }
}

// priority queue dequeue
function dequeue(){
    var priority= this.dataStore[0].code;
    for(var i=1;i<this.dataStore.length;++i){
        if(this.dataStore[i].code <priority){
            priority=i;
        }
    }
    return this.dataStore.splice(priority,1);
}

function toString(){
    var retStr="";
    for(var i=0;i<this.dataStore.length;++i){
        reStr+=this.dataStore[i].name +" code:"
             +this.dataStore[i].code +"\n";
    }
}