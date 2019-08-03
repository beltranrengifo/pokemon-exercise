#Pokemon App

##Iteración 1
* Crear vista `Home`
* Crear vista `Search`
* Crear vista `Detail`
* Crear componente `PokeHeader` e inyectarlo en el componente `App`

##Iteración 2
* Maquetar componente `PokeHeader`: logo y menú con enlaces a `Home` y `Search`.

##Iteración 3
* Crear componente `PokemonList` e inyectarlo en `Home`
* En hook adecuado del componente `PokemonList` llamar a la PokeApi y traer los primeros 20 resultados. Almacenar el valor necesario en una variable del componente que permita imprimir los pokemons.
* Comprobar en consola que tenemos los datos que necesitamos

##Iteración 4
* Crear el componente `PokemonCard` e inyectarlo en `PokemonList`.
* Usar la directiva `v-for` en `PokemonList` para imprimir tantas `PokemonCards` como sean necesarias.
* Cada card debe recibir por `props` el `name` y la `url` de cada pokemon.
* Comprobar que recibimos las `props` en `PokemonCard`.
* En el hook adecuado, llamaremos de nuevo a la API para traer la imagen de cada pokemon, y la almacenaremos una variable del componente que nos permita usarla en la template. 
* Almacenamos también el `id` del pokemon.
* Maquetar la card según referencia de diseño.
* Cada card tiene un color de fondo aleatorio. Usar style binding para conseguirlo.
`this.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)`

##Iteración 5
* Necesitamos que al hacer en cada card, podamos visualizar el detalle del pokemon. Cada card será un `router-link`. El la propiedad `:to` necesitaremos usar la variable del nombre de cada pokemon.
* Por otro lado, es necesario consigurar en el router un ruta que haga match con el `:to` de cada card. Debemos usar un parámetro en el path: `path: '/pokemon/:name'`. Y asignar el componente adecuado: `component: PokemonDetail`.
* Comprobamos que la navegación es correcta y que se carga la vista `PokemonDetail`.

##Iteración 6
* Crear el componente `PokemonDetailComponent` en inyectarlo en `PokemonDetail`
* En el hook de esta vista, llamar a la API con el nombre del pokemon, que tendremos disponible en `this.$route.params.name`. Recordamos que hemos configurado en el router un parámetro de ruta y que podemos recuperarlo.
* El resultado de esta petición se almacenará en una variable que se pasará como prop al componente `PokemonDetailComponent`.

##Iteración 7
* Maquetar el componente `PokemonDetailComponent` con la info que queramos, mirar referencia. Este componente no tiene casi nada de lógica, es sólo presentación.

##Iteración 8
* En la vista `Search` creamos un input y un botón.
* Almacena el valor del input en una variable: `v-model="myVar"`
* Añade un evento click al botón que dispare un método
* En el método asociado al botón deberás llamar a la API y buscar el pokemon que se haya escrito en el input. Almacena el valor en una variable.
* En caso de que no haya ningún pokemon con el nombrer introducido, muestra un mensaje
* En caso de que sí haya pokemon, muéstralo usando el componente `PokemonDetailComponent` que hicimos en la iteración anterior.

##Bonus 1
* Usa las propiedades `next` y `previous` que nos proporciona la API para hacer algo parecido a un paginador en el grid de `Home`. Ver referencia.
* Puedes usar Font Awesome para los iconos, o símplemente texto.
* Pinta en total de páginas y en nº de página en el que se encuentra el usuario.

##Bonus 2
* Implementa una búsqueda con resultados en tiempo real. Ver referencia.
