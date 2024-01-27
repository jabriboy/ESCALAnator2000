/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style/EscalaStyle.css';
import gerarEscala from './gerador.js'

function Escala(props) {
  const [date, setDate] = useState(new Date());
  const [lastDay, setLastDay] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  const [daysMonth, setDaysMonth] = useState(Array.from({ length: lastDay.getDate() - date.getDate() + 1 }, (_, index) => index));
  const [escala, setEscala] = useState([]);

  const gerar = () => {
    const newEscala = gerarEscala(date, props.escala, daysMonth)
    setEscala(newEscala)
  }

  const monthUp = () => {
    const newDate = new Date()
    newDate.setDate(1)
    newDate.setMonth(date.getMonth()+1)
    setDate(newDate)
    const newLastDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
    setLastDay(newLastDate)
    setDaysMonth(Array.from({ length: newLastDate.getDate() }, (_, index) => index))
  }
  
  const monthDown = () => {
    const newDate = new Date()
    newDate.setDate(1)
    newDate.setMonth(date.getMonth()-1)
    setDate(newDate)
    const newLastDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
    setLastDay(newLastDate)
    setDaysMonth(Array.from({ length: newLastDate.getDate() }, (_, index) => index))
  }

  const changeName = (e) => {
    // var newName = prompt("atualize", e.target.innerHTML)
    var newName = prompt("atualize", e.target.textContent)
    if (newName !== null) {
      // e.target.innerHTML = newName;
      e.target.textContent = newName;
    }
  }

  return (
    <>
      <div className="escala">
        <div className="container">
          <h1>{props.escala.title} - {date.toLocaleDateString('default', { month: 'long' })} {date.getFullYear()}</h1>
          <div className="div-month">
            <div className="btn-month" onClick={monthUp}>+</div>
            <p>mês da escala</p>
            <div className="btn-month" onClick={monthDown}>-</div>
          </div>
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
              {daysMonth.map((_, index) => {
                const currentDate = new Date(date);
                currentDate.setDate(date.getDate() + index);
                const dayOfWeek = currentDate.toLocaleDateString('default', { weekday: 'long' });
                
                // var c = index;
                return(
                  <tr key={index} className={dayOfWeek}>
                    <td>
                    {dayOfWeek === 'sábado' ? currentDate.getDate() + 1 : currentDate.getDate()}/{currentDate.getMonth() + 1}
                    </td>
                    <td>
                      {dayOfWeek === 'domingo' ? 'domingo noite' : dayOfWeek && dayOfWeek === 'sábado' ? 'domingo manhã' : dayOfWeek}
                    </td>
                    {props.escala.positions.map((_, indexI) => {
                      // c++
                      return ['terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'].includes(dayOfWeek) ? (
                      <td key={indexI} onClick={changeName}>
                        {index == 0 ? escala[indexI] : escala[indexI+((index)*props.escala.positions.length)]}
                      </td>
                      ) : (
                        <td key={indexI}>
                        {''}
                      </td>
                      )
                    })}
                  </tr>
                )
                
                
              })}
            </tbody>
          </table>
          <div onClick={gerar} className="btn-gerar">gerar</div>
        </div>
      </div>
    </>
  );
}

export default Escala;
