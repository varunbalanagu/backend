function getname(id, getroll) {
    console.log("name");
   
    getroll( "23A91A0507" );
}

function getroll(userroll, usersubId) {
    
    console.log("the roll is " + userroll);
   
    getmarks("CSE");
}

function getmarks(usersubId) {
    console.log("the marks are " + usersubId);
}
getname("123", function(userroll){
    getroll(userroll, function(usersubId) {
        getmarks(usersubId);
    });
});
