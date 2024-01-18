/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style/EscalaStyle.css';

function Escala(props) {
  const [escala, setEscala] = useState([]);
  const [date] = useState(new Date());
  const [lastDay] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  const [daysMonth] = useState(Array.from({ length: lastDay.getDate() - date.getDate() + 1 }, (_, index) => index));

  const gerarEscala = () => {
    const aux = [];
    const days = [];
    
    // Criar uma cópia da data para evitar modificá-la diretamente
    const currentDate = new Date(date);

    daysMonth.forEach(() => {
      const day = currentDate.getDate();
      currentDate.setDate(day + 1);

      const dayOfWeek = currentDate.toLocaleDateString('default', { weekday: 'long' });

      if (['terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'domingo', 'segunda-feira'].includes(dayOfWeek)) {
        days.push(dayOfWeek);
      }
    });

    for (let i = 1; i <= days.length; i++) {
      for (let j = 1; j <= props.escala.positions.length; j++) {
        // eslint-disable-next-line no-constant-condition
        while(true){
          const numeroAleatorio = Math.random();
          const indice = Math.floor(numeroAleatorio * props.escala.people.length);
  
          const novoNome = props.escala.people[indice].name;
          if(i == 1 && j == 1){
            var nomeAntigo = novoNome
            aux.push(novoNome)
            break
          }
          else if(novoNome != nomeAntigo){
            console.log(novoNome+' - '+nomeAntigo)
            nomeAntigo = novoNome
            aux.push(novoNome)
            break
          }

        }
      }
    }

    // console.log(aux);
    setEscala(aux);
  };

  return (
    <>
      <div className="escala">
        <div className="container">
          <h1>{props.escala.title} - {date.toLocaleDateString('default', { month: 'long' })}</h1>
          <table>
            <thead>
              <tr>
                <th>data</th>
                <th>dia</th>

                {/* posições */}
                {props.escala.positions.map((p) => (
                  <th key={p}>{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* dias do mês e dias da semana */}
              {daysMonth.map((d, rowIndex) => {
                // Criar uma cópia da data para evitar modificá-la diretamente
                
                const currentDate = new Date(date);
                currentDate.setDate(date.getDate() + d);

                const dayOfWeek = currentDate.toLocaleDateString('default', { weekday: 'long' });
                if (['terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'domingo', 'segunda-feira'].includes(dayOfWeek)) {
                  const rowKey = rowIndex;
                  return (
                    <tr key={rowKey} className={dayOfWeek}>
                    {/* data */}
                    <td>{dayOfWeek === 'segunda-feira' ? currentDate.getDate() - 1 : currentDate.getDate()}/{currentDate.getMonth() + 1}</td>
                    {/* dia */}
                    <td>{dayOfWeek === 'segunda-feira' ? 'domingo noite' : dayOfWeek && dayOfWeek === 'domingo' ? 'domingo manhã' : dayOfWeek}</td>

                    {/* pessoas */}
                    {/* usar a lista da escala para fazer esse mapeamento */}
                    {props.escala.positions.map((p, colIndex) => {
                      const cellIndex = rowIndex * props.escala.positions.length + colIndex;

                      // Verifica se a escala está completa antes de acessar
                      const nomePessoa = escala[cellIndex % escala.length];

                      return <td key={`${rowKey}-${colIndex}`}>{nomePessoa}</td>;
                    })}
                  </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <div onClick={gerarEscala} className="btn-gerar">gerar</div>
        </div>
      </div>
    </>
  );
}

export default Escala;
