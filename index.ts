import inquirer from "inquirer"

function wCounter (paragraph:string){
    let whiteSpaces = paragraph.replace(/\s/g,"");
    return whiteSpaces.length;
}
// console.log(wCounter("usman iqbal"))

async function startWordCounter (wCounter:(text:string) => number){
    do{
        let res = await inquirer.prompt({
            type:"input",
            name:"paragraph",
            message:"write paragraph here........"
        })
        console.log(wCounter(res.paragraph));
    }
    while(true)
}
startWordCounter(wCounter);