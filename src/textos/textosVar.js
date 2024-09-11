export const textos = {
    //Pagina principal -index.html
    texto0:"PORTAFOLIO CS",
    texto1:"Sobre mí",
    texto2:"CARLOS S. GÓMEZ",
    texto3:"Hola, soy Carlos S. Gomez, matemático-estadístico apasionado, con sólida experiencia en programación, especializado en machine learning y análisis de datos. Me enfoco en la innovación y la mejora continua para ofrecer soluciones avanzadas y eficientes. Me encanta crear soluciones innovadoras y explorar nuevas tecnologías.",
    texto4:"Habilidades",
    texto5:"Programación",
    texto6:"Python, JavaScript, HTML, CSS, SQL",
    texto7:"Análisis de Datos",
    texto8:"Pandas, NumPy, Matplotlib, Seaborn",
    texto9:"Machine Learning",
    texto10:"Scikit-learn, TensorFlow, Keras",
    texto11:"Proyectos",
    texto12:"Análisis Serie de Tiempo",
    texto13:"Dashboard.",
    //texto14:"GitHub",
    texto15:"Modelo de ML Neutal Network.",
    texto16:"Modelo predictivo.",
    //texto17:"GitHub",
    texto18:"Algoritmos Geneticos",
    texto19:"App para visualización de datos geoespaciales.",


    texto20:"Contacto",
    texto21:"csgomezg0@gmail.com",
    texto22:"LinkedIn",
    texto23:"https://www.linkedin.com/in/carlos-gomez-0a1869174/",
    texto24:'Puedes contactarme a través de ',
    texto25:'o en',
    texto26:"2024 Carlos S. Gómez.",

    texto26S0:"GITHUB",
    texto26S1:"Click Aqui",


    // Pagina Analisis de datos
    texto27:"ANALISIS DATOS",
    texto28:"DATA COLOMBIA 2024",
    texto29:`PRONOSTICO SERIE DE TIEMPO`,
    texto30:"Realizaremos un análisis descriptivo con el objetivo de comprender mejor los datos recolectados y proporcionar una base sólida para futuras investigaciones y decisiones. Este análisis se centrará en describir y resumir las características principales de nuestro conjunto de datos",
    texto31 : `<p>El an&aacute;lisis de series de tiempo es una t&eacute;cnica fundamental en la estad&iacute;stica y la ciencia de datos que se utiliza para examinar y entender datos secuenciales a lo largo del tiempo. Se enfoca en el estudio de datos que se recogen en intervalos regulares, como diarios, semanales o mensuales, y permite identificar patrones, tendencias y ciclos que pueden informar la toma de decisiones y la predicci&oacute;n futura.</p>

<p>En esencia, una serie de tiempo es una secuencia de observaciones realizadas en momentos espec&iacute;ficos y ordenados cronol&oacute;gicamente. Estas observaciones pueden surgir de diversas fuentes, incluyendo datos financieros, meteorol&oacute;gicos, de ventas, de tr&aacute;fico web, entre otros. El objetivo principal del an&aacute;lisis de series de tiempo es descomponer los datos en componentes significativos y comprender sus estructuras subyacentes.</p>

<p>Los componentes t&iacute;picos de una serie de tiempo incluyen:</p>
<ul>
    <li><strong>Tendencia</strong>: La direcci&oacute;n general del movimiento a largo plazo en los datos, ya sea hacia arriba, hacia abajo o estable.</li>
    <li><strong>Estacionalidad</strong>: Los patrones recurrentes y predecibles que ocurren en intervalos regulares, como estaciones del a&ntilde;o o d&iacute;as de la semana.</li>
    <li><strong>Ciclo</strong>: Las fluctuaciones que ocurren a intervalos irregulares, generalmente relacionadas con factores econ&oacute;micos o de mercado.</li>
    <li><strong>Ruido</strong>: Las variaciones aleatorias y no sistem&aacute;ticas que no pueden ser explicadas por los otros componentes.</li>
</ul>

<p>El an&aacute;lisis de series de tiempo emplea diversas metodolog&iacute;as para modelar y prever estos componentes. T&eacute;cnicas como el modelo ARIMA (AutoRegressive Integrated Moving Average), la descomposici&oacute;n de series de tiempo, y los modelos de suavizamiento exponencial son algunas de las herramientas utilizadas para captar la din&aacute;mica de los datos y generar pron&oacute;sticos precisos.</p>

<p>Adem&aacute;s, el an&aacute;lisis de series de tiempo proporciona una base s&oacute;lida para la toma de decisiones estrat&eacute;gicas en diversos campos. En el sector financiero, por ejemplo, se utiliza para predecir precios de acciones y evaluar riesgos. En el &aacute;mbito de la producci&oacute;n y la log&iacute;stica, ayuda a optimizar la planificaci&oacute;n de inventarios y la programaci&oacute;n de la producci&oacute;n. En la meteorolog&iacute;a, es esencial para la predicci&oacute;n del clima y la planificaci&oacute;n de eventos.</p>

<p>En este an&aacute;lisis, se abordar&aacute;n las metodolog&iacute;as y t&eacute;cnicas aplicadas a la serie de tiempo en cuesti&oacute;n, se explorar&aacute;n los patrones y tendencias observados, y se evaluar&aacute;n las implicaciones de los resultados obtenidos para proporcionar recomendaciones informadas y basadas en datos.</p>`,
    texto32:"Precipitaciones_Totales_Mensuales",
    texto33:`En la data tomada de datos abierto.gov de colombia se ha descargado un conjunto de
                        registros el cual contiene mediciones de las precipitaciones mensuales de diferentes rios de
                        Colombia. para efectos de este analisis se ha de usar inicialmente pyspark, este paquete
                        usualmente se usa para bigdata. se puede notar que existen valores en 0, estos datos podrian
                        asumirse como Nas pero dado que estamos trantando con precipitaciones, en este caso el valor 0
                        se asume que en el mes respectivo ha sido un periodo sin lluvias. 
                        
                        <p>
                        <a
                        href="https://www.datos.gov.co/Ambiente-y-Desarrollo-Sostenible/Precipitaciones-Totales-Mensuales/mb4n-6m2g/about_data">
                        Precipitaciones Totales Mensuales | Datos Abiertos Colombia
                        </a>
                        </p>
                        `,

                        

    texto34:`numero de filas es 6196 y el numero de campos es 19, se presenta un dato faltante al
                        cual se le realizara la respectiva imputación posteriormente. Dado que los valores faltantes
                        representan menos del 1% de los datos, podemos utilizar varios métodos de imputación dependiendo
                        del tipo de datos y el contexto. ( "A basic strategy to use incomplete datasets is to discard
                        entire rows and/or columns containing missing values. However, this comes at the price of losing
                        data which may be valuable (even though incomplete). A better strategy is to impute the missing
                        values, i.e., to infer them from the known part of the data"
                        [https://scikit-learn.org/stable/modules/impute.html])`,


    texto35:`En los campos iniciales se presentan STACIÓN, CÓDIGO, X y Y relacionado a las
                        coordenadas, MUNICIPIO, CUENCA y AÑO, adicionalmente 12 campos corresponden a las mediciones
                        tomadas en diferentes epocas del año.`,
    texto36:`Existen 174 categorias para ESTACION, 49 categorias para CUENCA y 75 categorias para MUNICIO.`,
    texto37:` Para efectos del presente ejercicio se tomara el Rio Bogotá (CUENCA_:"R. Bogotá" &
                        MUNICIPIO_:"Santafe de Bogotá"). Es de notar un periodo sin precipitación durante el 2006,
                        investigando parece que hubo una sequia durante ese periodo [Bogotá experienced periods of
                        drought around 2006 due to the El Niño phenomenon, which led to reduced rainfall and water
                        shortages (CHAT-GPT)], es importante indagar a mayor profundidad si es veridica esta
                        información.`,


    texto37S0:`Analisis general de la serie de tiempo del rio de bogota`,

    texto37S1:`<div><span>El an&aacute;lisis descriptivo evidencia:</span></div>
<ol>
<li><span>La serie de tiempo presenta 467 datos sin datos nulos.</span></li>
<li>El valor medio de precipitaci&oacute;n en el rio de Bogot&aacute; es de 70.37 y la desviaci&oacute;n est&aacute;ndar es de 57.22.</li>
<li><span>La serie de tiempo no presenta tendencia. Test de tendencia Mann-Kendall, P-value= 0.70 por lo cual se afirma que no hay evidencia significativa para rechazar la hip&oacute;tesis nula n</span>o hay una tendencia significativa.</li>
<li>La distribuci&oacute;n de los datos no es normal.&nbsp;
<ul>
<li>Test de normalidad (Shapiro-Wilk), P-value=2.84e-9, se rechaza la hip&oacute;tesis nula por lo tanto la distribuci&oacute;n no es normal.</li>
<li>Test de normalidad (Kolmogorov-Smirnov), igualmente se rechaza la hip&oacute;tesis nula con P-value&lt;0.005, los datos no presentan una distribuci&oacute;n normal.</li>
</ul>
</li>
<li>Hay evidencia suficiente para concluir que la serie es estacionaria.&nbsp;<span>Test de Dickey-Fuller aumentado (ADF) para estacionariedad: P</span><span>-value: 9.73e-05, l</span><span>a serie es estacionaria (se rechaza la hip&oacute;tesis nula).</span></li>
</ol>`,
    texto37S2:`Pronostico`,

    texto38:`Para realizar un pronóstico en una serie de tiempo, empleamos el paquete gluon-ts de
                    Python, que ofrece un conjunto robusto de herramientas para modelar y predecir datos temporales.
                    GluonTS es particularmente útil por su capacidad para manejar series de tiempo con componentes
                    complejos como tendencias, estacionalidades y ciclos. En este análisis, utilizamos modelos
                    preentrenados y técnicas como el DeepAR, que emplea redes neuronales recurrentes para capturar
                    patrones en los datos y generar predicciones precisas. Este enfoque permite generar pronósticos
                    confiables que son fundamentales para la toma de decisiones informadas basadas en datos históricos y
                    patrones identificados en la serie de tiempo. se tomara el 80% para entrenamiento y el 20% para
                    testeo, consiguiendo los siguientes resultados.`,

    texto39:`Se han conseguido las siguientes metricas, las cuales evidencian un resultado no tan deseable, El RMSE y MAE son altos en este contexto, lo que indica que el modelo no está ajustando los datos de manera óptima. El MAPE alto refuerza esta idea, ya que un error de casi 90% implica que las predicciones no son suficientemente precisas. Es posible que el modelo actual no esté capturando correctamente la complejidad de la serie de tiempo o que los datos presenten irregularidades que dificulten una buena predicción, se debe reconsiderar los hiperparametros del modelo con una grilla o quizas adecuarlo mediante un algoritmo gentico, tambien seria importante considerar otros modelos.`,

    texto40:`
                    <ul>
                        <li>
                            <p>RMSE: 48.03806951339789</p>
                        </li>
                        <li>
                            <p>MAE: 39.820340707567</p>
                        </li>
                        <li>
                            <p>MAPE: 89.16%</p>
                        </li>
                    </ul>
           
`
}