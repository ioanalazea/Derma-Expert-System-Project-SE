

export default function InferenceMachine() {

    var result = ""
    if (response["G01"]){
        if (response["G02"]){
            if (response["G03"]){
                if (response["G04"] || response["G34"] || response["G35"]){
                    result = "P01"
                }
            }
            else{   //g03 no
                if (response["G15"] || response["G16"] || response["G40"]){
                    result = "P02"
                }
            }
        }
        else{ //g02 no
            if (response["G11"]){
                if (response["G12"]){
                    if (response["G13"] || response["G14"] || response["G39"]){
                        result = "P03"
                    }
                }
                else{   //g12 no
                    if (response["G08"] || response["G09"] || response["G10"] || response["G38"]){
                        result = "P04"
                    }
                }
            }
            else{   //g11 no
                if (response["G17"]){
                    if (response["G18"]){
                        if (response["G41"])
                            result = "P06"
                    }
                    else{ // g18 no
                        if (response["G19"] || response["G20"] || response["G21"]){
                            result = "P07"
                        }
                    }
                }
                else{ // g17 no
                    if (response["G24"]){
                        if (response["G25"] || response["G43"]){
                            result = "P08"

                        }
                    }
                    else{ // g24 no
                        if (response["G31"] || response["G32"] || response["G33"] || response["G45"]){
                            result = "P09"
                        }
                    }
                }
            }
        }
    }
    else{ //g01 no
        if (response["G05"]){
            if (response["G06"] || response["G46"]){
                result = "P05"
            }
        }
        else{   //G05 no
            if (response["G26"] || response["G27"] || response["G28"] || response["G29"]){
                result = "P10"
            }
        }
    }




    return result;
}