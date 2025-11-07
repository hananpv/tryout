let name={
name :"john",
age:20,
place:function (){
    console.log("hello thi is"+this.name)
}
}
name.place();