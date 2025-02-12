let attListA = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
    "Workshop": 0,
    "Recess": 0,
}

let attListH = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
    "Workshop": 0,
    "Recess": 0,
}

let attListLabA = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
}

let attListLabH = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
}

function attend(listA, listH, sub) {
    listA[sub] += 1
    listH[sub] += 1
}
function bunk(listH, sub) {
    listH[sub] += 1
}

function display(listA, listH, listLabA, listLabH, sub) {
    if(sub !== "Workshop" && sub !== "Recess"){
        let displayStr = `${sub} : ${(listA[sub] / listH[sub]) * 100}% [${listA[sub]}/${listH[sub]} lectures | ${listLabA[sub]}/${listLabH[sub]} labs]`
        return displayStr
    }
    else{
        let displayStr = `${sub} : ${(listA[sub] / listH[sub]) * 100}% [${listA[sub]}/${listH[sub]} lectures]`
        return displayStr 
    }
}

export {
    attListA,
    attListH,
    attListLabA,
    attListLabH,
    attend,
    bunk,
    display,
}