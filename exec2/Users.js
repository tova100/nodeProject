class User{
    id="";
    nameuser="";
    kind="";
    borrowed=0;
constructor(id,nameuser,kind,borrowed){
this.borrowed=borrowed;
this.id=id;
this.nameuser=nameuser;
this.kind=kind;
}
}

    const arreyUser=[new User("1234","tali","resh",true),
    new User("111","malci","metch",false),]
    //id:"2222",nameuser:"tamar",kind:"resh",borrowed:true}]
    
    
    
    function printUser() {
    
        for (const item of arreyUser) {
            for (const key in item) {
                console.log(key);
    
            }
        }
    }

    function borrowedUser(index) {
        if (index > arreyUser.length)
        throw new Error("index not iiligal")
            console.log(arreyUser[index]);
    }

module.exports={printUser,borrowedUser};