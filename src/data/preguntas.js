export const preguntasConOpciones = [
    {
      lenguaje: "HTML",
      preguntas: [
        {
          pregunta: "¿Cuál es el propósito de la etiqueta <head> en HTML?",
          opciones: [
            "Definir el contenido principal de la página.",
            "Incluir metaetiquetas y enlaces a recursos externos.",
            "Crear una sección de encabezado para la página.",
            "Definir el cuerpo de la página."
          ],
          respuestaCorrecta: "Incluir metaetiquetas y enlaces a recursos externos."
        },
        {
          pregunta: "¿Qué significa HTML?",
          opciones: [
            "HyperText Markup Language",
            "High-Level Text Management Language",
            "HyperTransfer Markup Language",
            "HomeTool Markup Language"
          ],
          respuestaCorrecta: "HyperText Markup Language"
        },
        {
          pregunta: "¿Qué elemento se utiliza para crear una lista numerada en HTML?",
          opciones: [
            "<ul>",
            "<ol>",
            "<li>",
            "<dl>"
          ],
          respuestaCorrecta: "<ol>"
        },
        {
          pregunta: "¿Cuál es el propósito de la etiqueta <meta charset='UTF-8'>?",
          opciones: [
            "Definir el idioma de la página.",
            "Incluir un carácter especial en la página.",
            "Especificar el conjunto de caracteres utilizado en la página.",
            "Crear un espacio en blanco en la página."
          ],
          respuestaCorrecta: "Especificar el conjunto de caracteres utilizado en la página."
        },
        {
          pregunta: "¿Cómo se enlaza un archivo de hoja de estilos externo en HTML?",
          opciones: [
            "<style src='styles.css'>",
            "<link rel='stylesheet' href='styles.css'>",
            "<script type='text/css' src='styles.css'></script>",
            "<css href='styles.css'>"
          ],
          respuestaCorrecta: "<link rel='stylesheet' href='styles.css'>"
        },
        {
          pregunta: "¿Qué significa la sigla HTML?",
          opciones: [
            "HyperTransfer Markup Language",
            "High-Level Text Management Language",
            "HyperText Markup Language",
            "HomeTool Markup Language"
          ],
          respuestaCorrecta: "HyperText Markup Language"
        },
        {
          pregunta: "¿Cuál es el propósito de la etiqueta <div> en HTML?",
          opciones: [
            "Crear una lista ordenada.",
            "Agrupar contenido para aplicar estilos.",
            "Definir un enlace.",
            "Insertar una imagen."
          ],
          respuestaCorrecta: "Agrupar contenido para aplicar estilos."
        },
        {
          pregunta: "¿Cuál es el propósito de la etiqueta <a> en HTML?",
          opciones: [
            "Definir el idioma de la página.",
            "Crear una lista no ordenada.",
            "Especificar un enlace a otra página.",
            "Insertar un salto de línea."
          ],
          respuestaCorrecta: "Especificar un enlace a otra página."
        },
        {
          pregunta: "¿Cómo se define un encabezado de nivel 2 en HTML?",
          opciones: [
            "<h2>",
            "<head2>",
            "<header2>",
            "<h3>"
          ],
          respuestaCorrecta: "<h2>"
        },
        {
          pregunta: "¿Cuál es el propósito de la etiqueta <body> en HTML?",
          opciones: [
            "Definir el cuerpo de la página.",
            "Incluir metaetiquetas y enlaces a recursos externos.",
            "Crear una sección de encabezado para la página.",
            "Definir el contenido principal de la página."
          ],
          respuestaCorrecta: "Definir el cuerpo de la página."
        },
        // Puedes agregar más preguntas según tus necesidades...
      ]
    },
    {
      lenguaje: "CSS",
      preguntas: [
        {
          pregunta: "Explique la diferencia entre margin y padding en CSS.",
          opciones: [
            "Margin es el espacio interior de un elemento, mientras que padding es el espacio exterior.",
            "Margin es el espacio exterior de un elemento, mientras que padding es el espacio interior.",
            "Margin controla el espaciado vertical, mientras que padding controla el espaciado horizontal.",
            "No hay diferencia, ambos términos se utilizan indistintamente."
          ],
          respuestaCorrecta: "Margin es el espacio exterior de un elemento, mientras que padding es el espacio interior."
        },
        {
          pregunta: "¿Cuál es el propósito de la propiedad 'display' en CSS?",
          opciones: [
            "Controlar el espacio entre elementos.",
            "Especificar el tipo de caja de un elemento.",
            "Ocultar un elemento en la página.",
            "Cambiar el color de fondo de un elemento."
          ],
          respuestaCorrecta: "Especificar el tipo de caja de un elemento."
        },
        {
          pregunta: "¿Cómo se seleccionan todos los elementos <p> dentro de un div con clase 'container' en CSS?",
          opciones: [
            ".container p {}",
            "div.container p {}",
            "#container p {}",
            "container p {}"
          ],
          respuestaCorrecta: "div.container p {}"
        },
        {
          pregunta: "¿Qué propiedad se utiliza para establecer el color del texto en CSS?",
          opciones: [
            "color",
            "background-color",
            "text-color",
            "font-color"
          ],
          respuestaCorrecta: "color"
        },
        {
          pregunta: "¿Qué hace la propiedad 'position: relative;' en CSS?",
          opciones: [
            "Posiciona el elemento relativo a su posición normal.",
            "Oculta el elemento en la página.",
            "Centra el elemento horizontalmente en la página.",
            "No afecta la posición del elemento."
          ],
          respuestaCorrecta: "Posiciona el elemento relativo a su posición normal."
        },
        {
          pregunta: "¿Cuál es el propósito de la propiedad 'flex' en CSS?",
          opciones: [
            "Establecer el tamaño de un elemento.",
            "Crear un diseño de caja flexible.",
            "Ocultar un elemento en la página.",
            "Cambiar el color de fondo de un elemento."
          ],
          respuestaCorrecta: "Crear un diseño de caja flexible."
        },
        {
          pregunta: "¿Cómo se aplica un estilo solo al primer elemento hijo de un contenedor en CSS?",
          opciones: [
            ":first-child",
            ":first",
            "first-child",
            "first()"
          ],
          respuestaCorrecta: ":first-child"
        },
        {
          pregunta: "¿Qué hace la propiedad 'box-sizing: border-box;' en CSS?",
          opciones: [
            "Ajusta el tamaño del borde del elemento.",
            "Incluye el borde y el relleno en el tamaño total del elemento.",
            "Oculta el contenido del elemento.",
            "Ignora el tamaño del borde y el relleno."
          ],
          respuestaCorrecta: "Incluye el borde y el relleno en el tamaño total del elemento."
        },
        {
          pregunta: "¿Cuál es el propósito de la propiedad 'z-index' en CSS?",
          opciones: [
            "Establecer el tamaño vertical de un elemento.",
            "Controlar la superposición de elementos posicionados.",
            "Cambiar el color de fondo de un elemento.",
            "Ocultar un elemento en la página."
          ],
          respuestaCorrecta: "Controlar la superposición de elementos posicionados."
        },
        {
          pregunta: "¿Cómo se cambia el estilo del cursor cuando pasa sobre un enlace en CSS?",
          opciones: [
            "cursor-style: pointer;",
            "mouse-cursor: hover;",
            "cursor: hover;",
            "cursor: pointer;"
          ],
          respuestaCorrecta: "cursor: pointer;"
        },
        // Puedes agregar más preguntas según tus necesidades...
      ]
    },
    {
      lenguaje: "JavaScript",
      preguntas: [
        {
          pregunta: "¿Qué es JavaScript y para qué se utiliza?",
          opciones: [
            "Un lenguaje de programación utilizado para crear páginas web interactivas.",
            "Un sistema operativo utilizado para ejecutar código en el navegador.",
            "Una herramienta de diseño para crear estilos en la web.",
            "Un formato de intercambio de datos utilizado para almacenar información en el cliente."
          ],
          respuestaCorrecta: "Un lenguaje de programación utilizado para crear páginas web interactivas."
        },
        {
          pregunta: "Explique la diferencia entre '==' y '===' en JavaScript.",
          opciones: [
            "'==' compara el valor y '===' compara el valor y el tipo de datos.",
            "'==' compara solo el valor.",
            "'===' compara solo el tipo de datos.",
            "'==' y '===' son lo mismo en JavaScript."
          ],
          respuestaCorrecta: "'==' compara el valor y '===' compara el valor y el tipo de datos."
        },
        {
          pregunta: "¿Qué es el event bubbling en JavaScript?",
          opciones: [
            "Un método para controlar eventos de teclado.",
            "La propagación de un evento a través de la jerarquía de elementos HTML.",
            "La creación de burbujas en la interfaz de usuario.",
            "La detección de eventos en un elemento específico."
          ],
          respuestaCorrecta: "La propagación de un evento a través de la jerarquía de elementos HTML."
        },
        {
          pregunta: "¿Cómo se declara una variable en JavaScript?",
          opciones: [
            "var variable;",
            "variable = var;",
            "variable var;",
            "declare variable;"
          ],
          respuestaCorrecta: "var variable;"
        },
        {
          pregunta: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
          opciones: [
            "array.push()",
            "array.append()",
            "array.add()",
            "array.insert()"
          ],
          respuestaCorrecta: "array.push()"
        },
        {
          pregunta: "¿Cuál es la función de la sentencia 'if' en JavaScript?",
          opciones: [
            "Definir una función.",
            "Crear un bucle.",
            "Realizar una comprobación condicional.",
            "Declarar una variable."
          ],
          respuestaCorrecta: "Realizar una comprobación condicional."
        },
        {
          pregunta: "¿Qué hace el método 'querySelector' en JavaScript?",
          opciones: [
            "Selecciona el primer elemento que coincide con un selector CSS.",
            "Cambia el estilo de un elemento en el DOM.",
            "Añade un evento a un elemento.",
            "Crea un nuevo elemento en el DOM."
          ],
          respuestaCorrecta: "Selecciona el primer elemento que coincide con un selector CSS."
        },
        {
          pregunta: "¿Cuál es la función de 'JSON.stringify()' en JavaScript?",
          opciones: [
            "Convierte un objeto JavaScript a una cadena JSON.",
            "Convierte una cadena JSON a un objeto JavaScript.",
            "Analiza una cadena JSON y devuelve un objeto JavaScript.",
            "No existe el método 'JSON.stringify()' en JavaScript."
          ],
          respuestaCorrecta: "Convierte un objeto JavaScript a una cadena JSON."
        },
        {
          pregunta: "¿Cómo se realiza una iteración sobre los elementos de un array en JavaScript?",
          opciones: [
            "for (i in array) { }",
            "foreach (element in array) { }",
            "for (var i = 0; i < array.length; i++) { }",
            "while (array.hasNext()) { }"
          ],
          respuestaCorrecta: "for (var i = 0; i < array.length; i++) { }"
        },
        {
          pregunta: "¿Qué es una función de flecha en JavaScript?",
          opciones: [
            "Una función que utiliza la palabra clave 'arrow'.",
            "Una función que siempre devuelve un valor booleano.",
            "Una función que se declara con la palabra clave 'function'.",
            "Una función que se utiliza para comparar valores."
          ],
          respuestaCorrecta: "Una función que utiliza la palabra clave 'arrow'."
        },
        // Puedes agregar más preguntas según tus necesidades...
      ]
    }
    // Puedes agregar más lenguajes con sus preguntas aquí...
  ];

