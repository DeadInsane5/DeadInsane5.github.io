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
};

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
};

let attListLabA = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
};

let attListLabH = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
};

function attend(sub, lab) {
    if (lab) {
        attListLabA[sub] += 1;
        attListLabH[sub] += 1;
    } else {
        attListA[sub] += 1;
        attListH[sub] += 1;
    }
}

function bunk(sub, lab) {
    if (lab) {
        attListLabH[sub] += 1;
    } else {
        attListH[sub] += 1;
    }
}

function display(listA, listH, listLabA, listLabH, sub) {
    let attVal
    let attValLab
    isNaN((listA[sub] / listH[sub]) * 100) ? attVal = 0 : attVal=((listA[sub] / listH[sub]) * 100)
    isNaN((listLabA[sub] / listLabH[sub]) * 100) ? attValLab = 0 : attValLab=((listLabA[sub] / listLabH[sub]) * 100)

    if (sub !== "Workshop" && sub !== "Recess") {
        let displayStr = `${sub} : Lec - ${attVal}% Lab - ${attValLab}% [${listA[sub]}/${listH[sub]} lectures | ${listLabA[sub]}/${listLabH[sub]} labs]`;
        return displayStr;
    } else {
        let displayStr = `${sub} : ${attVal}% Lab - ${attValLab}% [${listA[sub]}/${listH[sub]} lectures]`;
        return displayStr;
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
};