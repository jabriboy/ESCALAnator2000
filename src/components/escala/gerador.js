export const gerarEscala = (date, propsEscala, daysMonth) => {
    const days = [];
    // Criar uma cópia da data para evitar modificá-la diretamente
    const currentDate = new Date(date);

	daysMonth.forEach(() => {
		const day = currentDate.getDate();
		const dayOfWeek = currentDate.toLocaleDateString('default', { weekday: 'long' });

		currentDate.setDate(day + 1);
		
		days.push(dayOfWeek);
	});

	const selectPerson = (i, pos) => {
		// console.log('selectPerson')
		// eslint-disable-next-line no-constant-condition
		while(true){
			const numeroAleatorio = Math.random();
			const indice = Math.floor(numeroAleatorio * propsEscala.people.length);
			const novoNome = propsEscala.people[indice].name;
			// console.log(novoNome)
			if(propsEscala.people[indice].days.includes(days[i])){
				if(propsEscala.people[indice].pos.includes(pos)){
					if(!list.includes(novoNome)){
						if(nomeAntigo != novoNome){
							escala.push(novoNome)
							list.push(novoNome)
							nomeAntigo = novoNome
							break
						}
					}
				}
			}
		}
	}
    
	const escala = []
	var nomeAntigo = ''

	if(propsEscala.title == 'Escala da Mixagem'){
		for (let i = 0; i < days.length; i++) {
			for (let j = 0; j < propsEscala.positions.length; j++) {
				// eslint-disable-next-line no-constant-condition
				while(true){
					const numeroAleatorio = Math.random();
					const indice = Math.floor(numeroAleatorio * propsEscala.people.length);
					const novoNome = propsEscala.people[indice].name;
					if(propsEscala.people[indice].days.includes(days[i])){
						if(nomeAntigo != novoNome){
							escala.push(novoNome)
							list.push(novoNome)
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
	}
	else if(propsEscala.title == 'Escala do Louvor'){
		for (let i = 0; i < days.length; i++) {
			var count = 0
			var amount = 0
			var list = []
			for (let j = 0; j < propsEscala.positions.length; j++) {
				// eslint-disable-next-line no-constant-condition
				while(true){
					if(days[i] == 'segunda-feira'){
						escala.push('segunda')
						break
					}
					if(j == 0){
						count = 0
						amount = 0
						var vozes = []
						if(days[i] == 'quarta-feira'){
							amount = 1
						}
						else{
							amount = 2
						}
						while(count != amount){
							const numeroAleatorio = Math.random();
							const indice = Math.floor(numeroAleatorio * propsEscala.people.length);
							const novoNome = propsEscala.people[indice].name;
							if(propsEscala.people[indice].days.includes(days[i])){
								if(propsEscala.people[indice].pos.includes('voz principal')){
									if(nomeAntigo != novoNome){
										// console.log('push: '+novoNome)
										vozes.push(novoNome)
										vozes.push(' ')
										nomeAntigo = novoNome
										count++
									}
								}
							}
						}
						escala.push(vozes)
						break
					}
					else if(j == 1){
						count = 0
						var backs = []
						if(days[i] == 'quarta-feira'){
							amount = 4
						}
						else{
							amount = 3
						}
						while(count != amount){
							const numeroAleatorio = Math.random();
							const indice = Math.floor(numeroAleatorio * propsEscala.people.length);
							const novoNome = propsEscala.people[indice].name;
							if(propsEscala.people[indice].days.includes(days[i])){
								if(propsEscala.people[indice].pos.includes('back vocal')){
									if(!vozes.includes(novoNome)){
										if(nomeAntigo != novoNome){
											// console.log('push: '+novoNome)
											backs.push(novoNome)
											backs.push(' ')
											nomeAntigo = novoNome
	
											count++
										}
									}
								}
							}
						}
						escala.push(backs)
						break
					}
					else if(j == 2){
						selectPerson(i, 'bateria')
						break
					}
					else if(j == 3){
						selectPerson(i, 'baixo')
						break
					}
					else if(j == 4){
						selectPerson(i, 'guitarra')
						break
					}
					else if(j == 5){
						selectPerson(i, 'violão')
						break
					}
					else if(j == 6){
						selectPerson(i, 'teclado')
						break
					}
					else if(j == 7){
						selectPerson(i, 'sopro')
						break
					}
				}
			}
		}
	}
	else if(propsEscala.title == 'Escala da Filmagem'){
		for (let i = 0; i < days.length; i++) {
			list = []
			for (let j = 0; j < propsEscala.positions.length; j++) {
				// eslint-disable-next-line no-constant-condition
				while(true){
					if(days[i] == 'segunda-feira'){
						escala.push('segunda')
						break
					}
					if(days[i] == 'terça-feira'){
						if(j == 0){
							selectPerson(i, 'mesa de corte')
							break
						}
						escala.push(' ')
						break
					}
					if(days[i] == 'quinta-feira' || days[i] == 'sexta-feira'){
						if(j == 3){
							escala.push(' ')
							break
						}
					}
					if(j == 0){
						selectPerson(i, 'mesa de corte')
						break
					}
					if(j == 1){
						selectPerson(i, 'joystick')
						break
					}
					if(j == 2){
						selectPerson(i, 'notebook')
						break
					}
					if(j == 3){
						selectPerson(i, 'camera 4')
						break
					}
				}
			}
		}
	}

    // console.log(escala);
	return escala
}

export default gerarEscala;