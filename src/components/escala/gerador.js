export const gerarEscala = (date, propsEscala, daysMonth) => {
    const days = [];
    
    // Criar uma cópia da data para evitar modificá-la diretamente
    const currentDate = new Date(date);

	daysMonth.forEach(() => {
		const day = currentDate.getDate();
		currentDate.setDate(day + 1);
  
		const dayOfWeek = currentDate.toLocaleDateString('default', { weekday: 'long' });
  
		if (['terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'domingo', 'segunda-feira', 'sábado'].includes(dayOfWeek)) {
			days.push(dayOfWeek);
		}
	});
    
    // const escala = new Array(days.length).fill().map(() => new Array(propsEscala.positions.length).fill(0));
	const escala = []

    // var count = 0
	// var nomeAntigo =  ''
    for (let i = 0; i < days.length; i++) {
		for (let j = 0; j < propsEscala.positions.length; j++) {
			// eslint-disable-next-line no-constant-condition
			
			const numeroAleatorio = Math.random();
			const indice = Math.floor(numeroAleatorio * propsEscala.people.length);
			const novoNome = propsEscala.people[indice].name;
			
			// count++
			escala.push(novoNome)
		}
    }

    console.log(escala);
	return escala
}

export default gerarEscala;