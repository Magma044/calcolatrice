let operazione = "";
function bottoneCliccato(valore){
    try{
        if(valore !== "=" && valore !== "CE"){
            operazione += valore;
            document.getElementById("risultato").value = operazione;
        }
        else if(valore === "="){
			if(operazione == "42"){
				document.getElementById("risultato").value = "The answer to life, the universe and everything";
			}
			else{
				let risultato = eval(operazione);
				document.getElementById("risultato").value = risultato;
				risultato = "";
			}
        }
        else{
            document.getElementById("risultato").value = "";
            operazione = "";
            risultato = "";
        }
    }
    catch(errore){
        document.getElementById("risultato").value = "Errore";
        operazione = "";
        risultato = "";
    }
}