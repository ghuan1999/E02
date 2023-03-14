function demo(){
    let input:HTMLInputElement = <HTMLInputElement>document.getElementById("fullname");
    let name=input.value;
    let result:string="3, " +name+ "!";
    let h:HTMLParagraphElement=<HTMLParagraphElement>document.getElementById("result-content");
    h.innerHTML=result;
}