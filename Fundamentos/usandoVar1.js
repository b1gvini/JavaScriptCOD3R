{
    {
        {
            {
                var sera = "Será???" //variável visível independente da identação/escopo
                console.log(sera)
            }
        }
    }
}
console.log(sera + " Sim, batata") 

function test(){
    var a = 123
    console.log(a)
}
test()
//console.log(a) ERRO, variável local da função.