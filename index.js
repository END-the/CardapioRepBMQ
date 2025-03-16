function gerarCardapio(){
    let i = 0
    var listaIngredientes=[]
    var listaIngredientesOrganizada=[]
    var quantIngre=[]

    var comidasRep=
    [
        ["strogonof","frango"],
        ["farofa", "farinha"],
        ["ovo", "arroz"],
    ]
    var comidasFia = 
    [
        ["lasanha", "carne", "massa", "lasanha", "molho"],
        ["bisteca", "carne"],
        ["pizza", "pizza"],
    ]
    
    var comidaRep = 1;
    while (comidaRep!=13){
        aux = Math.floor((Math.random() * 3) );
        document.getElementById(`${comidaRep}`).innerHTML = comidasRep[aux][0];
        listaIngredientes.push(comidasRep[aux][1])
        comidaRep++
    }

    
    
    var comidaFia = 20;
    while (comidaFia!=28){
        aux = Math.floor((Math.random() * 3) );
        document.getElementById(`${comidaFia}`).innerHTML = comidasFia[aux][0];
        
        for (i = 1; i < comidasFia[aux].length; i++){
            listaIngredientes.push(comidasFia[aux][i])
        }
        comidaFia++
    }

//organizar ingredientes
    var jatem = false;
    var y = 0;
    for (i = 0; i < listaIngredientes.length; i++){
        jatem=false
        for (y = 0; y < listaIngredientesOrganizada.length; y++){
            if(listaIngredientesOrganizada[y]==listaIngredientes[i]){
                jatem = true;
                quantIngre[y]+=1;
                break;
            }
        }
        if(jatem==false){
            listaIngredientesOrganizada.push(listaIngredientes[i])
            quantIngre.push(1)
        }
    }
    
    var todosIngredientesContabilizados = ""; 
    for (var j = 0; j < listaIngredientesOrganizada.length; j++) {
        todosIngredientesContabilizados += listaIngredientesOrganizada[j] + ": " + quantIngre[j] + "<br>";
    }

    document.getElementById("lista").innerHTML = todosIngredientesContabilizados;
}