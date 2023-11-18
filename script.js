function calcularIMC() {
    const edad = parseInt(document.getElementById('edad').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const alergias = document.getElementById('alergias').value.toLowerCase().split(',');
  
    const imc = peso / ((altura / 100) ** 2);
    const resultado = document.getElementById('resultado');
  
    let sugerencia = '';
    let ejercicio = '';
  
    if (edad >= 18) {
      if (imc < 18.5) {
        sugerencia = 'Tu peso se encuentra por debajo de un valor saludable. Te recomiendo consumir alimentos ricos en proteínas y nutrientes. Para los ejercios, necesitas enfocarte en la fuerza.';
        ejercicio = 'Ejercicios de fuerza recomendados: Planca, , sentadillas, levantamiento de pesas, push-ups, entre otros.';
      } else if (imc >= 18.5 && imc < 25) {
        sugerencia = 'Tu peso se encuentra dentro de un valor saludable. Te recomiendo seguir manteniendo una dieta balanceada. Para los ejercios, necesitas enfocarte en aeróbicos.';
        ejercicio = 'Ejercicios de aeróbicos recomendados: Boxeo, nado, deportes de equipo, correr, nadar, entre otros.';
      } else if (imc >= 25 && imc < 30) {
        sugerencia = 'Tu peso se encuentra por arriba de un valor saludable. Te recomiendo consumir alimentos con menos calorías. Para los ejercios, necesitas enfocarte en cardiovasculares.';
        ejercicio = 'Ejercicio cardiovascular: Trote, caminatas, ciclismo, entre otros.';
      } else {
        sugerencia = 'Tu peso se encuentra por muy arriba de un valor saludable. Te recomiendo consultar un profesional de la salud para mayor orientación.';
        ejercicio = 'Acude con un especialista para que puedas obtener un plan de acuerdo a tus necesidades.';
      }
    } else {
      sugerencia = 'Debido a la edad, lo recomendable es consultar a un especialista.';
      ejercicio = 'Consultar a un especialista para tener un plan acorde a tu edad.';
    }
  
    // Mensaje para evitar alergias
    if (alergias.length > 0 && alergias[0] !== '') {
      sugerencia += ' En la medida de lo posible, evita consumir productos, medicamentos, alimentos o bebidas que puedan causarte alergias como: ' + alergias.join(', ');
    }
  
    resultado.innerHTML = `
      <h2>Resultado:</h2>
      <p>Tu IMC es: ${imc.toFixed(2)}</p>
      <p>${sugerencia}</p>
      <p><strong>Rutina de ejercicio:</strong> ${ejercicio}</p>
    `;
  }
  