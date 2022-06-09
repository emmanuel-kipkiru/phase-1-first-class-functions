function receivesAFunction(callback){
    callback();  
}
function returnsANamedFunction(){
    return function namedFuction(){
        return "smile baby"
    }
}
function returnsAnAnonymousFunction(){
    return () => "before all";
}