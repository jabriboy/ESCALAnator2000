export const gerarEscala = (date, propsEscala, daysMonth) => {
    const days = [];
    
    // Criar uma cópia da data para evitar modificá-la diretamente
    const currentDate = new Date(date);

	daysMonth.forEach(() => {
		const day = currentDate.getDate();
		const dayOfWeek = currentDate.toLocaleDateString('default', { weekday: 'long' });

		currentDate.setDate(day + 1);
  
		if (['terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'domingo', 'segunda-feira', 'sábado'].includes(dayOfWeek)) {
			days.push(dayOfWeek);
		}
	});
    
	const escala = []
	var nomeAntigo = ''
    for (let i = 0; i < days.length; i++) {
		for (let j = 0; j < propsEscala.positions.length; j++) {
			// eslint-disable-next-line no-constant-condition
			while(true){
				const numeroAleatorio = Math.random();
				const indice = Math.floor(numeroAleatorio * propsEscala.people.length);
				const novoNome = propsEscala.people[indice].name;
				if(propsEscala.people[indice].days.includes(days[i])){
					console.log(nomeAntigo+' - '+novoNome)
					if(nomeAntigo != novoNome){
						escala.push(novoNome)
						nomeAntigo = novoNome
						break
					}
				}
				else if(days[i] == 'segunda-feira'){
					escala.push('')
					break
				}
			}
		}
    }

    console.log(escala);
	return escala
}

export default gerarEscala;