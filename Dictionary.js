/**
 * Created by vimalkumar on 7/31/2016.
 */
function Dictionary(){
    this.datastore= new Array();
    this.add=add;
    this.find=find;
    this.remove=remove;
    this.showAll=showAll;
}
function add(key,value){
    this.datastore[key]=value;
}
function find(key){
    return this.datastore[key];
}
function remove(key){
    delete this.datastore[key]
}
function  showAll() {
    var key;
    forEach(key in Object.keys(this.datastore))
    {
        print(key + this.datastore[key])
    }
}

function count(){
    var n=0;
    var key;
    forEach(key in Object.keys(this.datastore))
    {
        ++n;
        
    }
    return n;
}