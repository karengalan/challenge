function range_vision(number) {
    const digits = Array.from(String(number), Number); // Convertir el número en un arreglo de dígitos
  
    let minValue = Infinity; // Valor mínimo de visión encontrado
    let hasLowestVisionValueOne = false; // Bandera indicando si se encontró un dígito 1 con el valor de visión mínimo
  
    for (let i = 0; i < digits.length; i++) {
      const range = digits[i]; // Rango de visión del dígito actual
  
      if (digits[i] === 1) {
        const visionValue = calculateVisionValue(digits, i, range); // Calcular el valor de visión del dígito 1
  
        if (visionValue < minValue) {
          minValue = visionValue;
          hasLowestVisionValueOne = true;
        }
      }
    }
  
    return hasLowestVisionValueOne;
  }
  
  // Función auxiliar para calcular el valor de visión de un dígito en el número
  function calculateVisionValue(digits, index, range) {
    let visionValue = 0;
  
    for (let i = Math.max(0, index - range); i <= Math.min(index + range, digits.length - 1); i++) {
      visionValue += digits[i];
    }
  
    return visionValue;
  }
  console.log(range_vision(34315))