## Базовый вид компонента
```vue
<template>
	<div>Hello World</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
</style>
```

## Интерполяция
```vue
<template>
	<div>Hello World</div>
</template>

<script>
	export default {
		data() {
			return {
				text: "Hello world"
			}
		}
	}
</script>
```

Внутри интерполяции может быть любой JS код:
```vue
<template>
	<div>
		{{ message.split('').reverse().join('') }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Hello World'
			}
		}
	}
</script>
```

## Директивы

### **v-if** - если true, компонент остается в DOM дереве, иначе удаляется оттуда
```vue
<template>
	<div v-if="showText">
		Hello world
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showText: true
			}
		}
	}
</script>
```

### **v-for** - проходится по массиву, на каждой итерации по очереди отрисовывает компонент, к которому был применен
```vue
<template>
	<div v-for="item of array">
		{{ item }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				array: ['one', 'two', 'three']
			}
		}
	}
</script>
```

### **v-bind** - реактивно связывает атрибут с переменной
В таком случае при изменении переменной url, будет реактивно изменятся и ссылка
```vue
<template>
	<a v-bind:href="url">Я ссылка</a>
</template>

<script>
	export default {
		data() {
			return {
				url: 'https://vk.com/feed'
			}
		}
	}
</script>
```

Сокращение:
```vue
<a :href="url"></a>
```

### v-on - подписка на событие
```vue
<template>
	<button v-on:click="onClick">Нажми меня</button>
</template>

<script>
	export default {
		methods: {
			onClick() {
				alert('Кнопку нажали!')
			}
		}
	}
</script>
```

Сокращение
```vue
<button @click="onClick">Нажми меня</button>
```

## Взаимодействие компонентов друг с другом
### От родителя к дочернему
В данном случае используются **props**

Ребенок:
```vue
<template>
	<div>{{ text }}</div>
</template>

<script>
	export default {
		props: {
			text: String
		}
	}
</script>
```

Родитель:
```vue
<template>
	<child text="Hello World"></child>
</template>

<script>
	import Child from './Child.vue';
	
	export default {
		components: { Child },
	}
</script>
```

Либо реактивный вариант:
```vue
<template>
	<child :text="textForChild"></child>
</template>

<script>
	import Child from './Child.vue';
	
	export default {
		components: { Child },
		data() {
			return {
				textForChild: "Hello world"
			}
		}
	}
</script>
```

При изменении переменной textForChild, будет автоматически перерендерен компонент ребенка.

**Важно:** внутри ребенка менять значения внутри props *нельзя*.
Почему? Мы не всегда знаем, что из себя представляет компонент, допустим, если берем его из библиотеки.
К примеру у нас есть переменная, она используется в нескольких местах, мы передали ее в этот компонент, а он неожиданно для нас ее изменил, что привело к неопределенному поведению в других использующих компонентах.
Также он может поменять ее на некорректное значение, что и вовсе приведет к беде.

### От дочернего к родителю
В данном случае дочерний будет отправлять события, которые будет ловить и обрабатывать родитель.

Ребенок:
```vue
<template>
	<button @click="sendEvent">Отправить событие</button>
</template>

<script>
	export default {
		methods: {
			sendEvent() {
				this.$emit('someEvent')
			}
		}
	}
</script>
```

Родитель:
```vue
<template>
	<child @someEvent="handleEvent"></child>
</template>

<script>
	import Child from './Child.vue';
	
	export default {
		components: { Child },
		methods: {
			handleEvent() {
				alert('Событие пришло!')
			}
		}
	}
</script>
```

Также при отправлении события можно передавать данные:
```js
this.$emit('someEvent', [1, 2, 3])
```

```vue
<script>
export default {
	methods: {
		handleEvent(data) {
			data.forEach(item => console.log(item))
		}
	}
}
</script>
```

## Получение ссылки на DOM элемент
```vue
<template>
	<input ref="myInput"/>
</template>

<script>
	export default {
		methods() {
			getInputValue() {
				return this.$refs.myInput.value;
			}
		}
	}
</script>
```

## Ньюансы
К данным компонента мы можем обратиться внутри скрипта и внутри шаблона, но есть разница:
- Внутри объекта мы обращаемся через **this**
- Внутри шаблона **this** подставляется по умолчанию

```vue
<template>
	<button @click="$emit('someEvent')">Нажми меня</button>
	<div>
		{{ text }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: 'Hello world'
			}
		},
		methods() {
			sendEvent() {
				this.$emit('someEvent')
			},
			getText() {
				return this.text
			}
		}
	}
</script>
```