---
title: 'Hello World'
date: '2021-06-21T14:41:19.407Z'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
author:
  name: 'Kyaw Zayar Tun'
  avatar: '/images'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si qua in iis corrigere voluit, deteriora fecit. Hoc loco tenere se Triarius non potuit. Re mihi non aeque satisfacit, et quidem locis pluribus. Graecum enim hunc versum nostis omnes-: Suavis laborum est praeteritorum memoria. Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit.

### Typography and Syntax highlighting

- Typography - `tailwind/typography`
- SyntaxHighlighting - `highlight.js/styles/github-dark.css`

```js
// Syntax highlighting
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  getGenderPrefix() {
    const gen = this.gender.toLowerCase()
    if (gen === 'male') {
      return 'his'
    } else if (gen === 'female') {
      return 'her'
    } else {
      return 'his/her'
    }
  }

  getInfo() {
    return `${this.name} is ${
      this.gender
    } and ${this.getGenderPrefix()} age is ${this.age}.`
  }
}

let person = new Person('John Doe', 24, 'male')
console.log(person.getInfo())

```