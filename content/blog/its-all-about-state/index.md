---
title: React vs Angular - It's All About State?
date: "2015-05-28T22:40:32.169Z"
description: This article compares Angular and React ecosystems exposing how the two manage state and data flow in a modern web application.
---

With a flood of frontend frameworks and libraries of today, some remain on stage for the fight. Today we'll talk about the core differences between Angular and React.

## A Brief Introduction

Ok, we all know that Angular and React are two different things. Angular is a full fledged framework that ships all you need to build a full modern web app, while React is _"a JavaScript library for building user interfaces"_.

Since React is **just** a library (and awesome by the way), when you're using React to create a new web app, you need to adhere to a set of libraries for http requests, better state management and so on. Thus when refering to React, please remember that I'm refering to the ecosystem not just the library. :)

## The Angular way: DI and Services

Just as its predecessor (angularjs), Angular comes with Dependency Injection so we can inject Services into our components, and that enables the basic state management that we see as soon as we first use Angular.

To accomplish that we firstly define our service:

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CountService {
  count: number;

  private;

  constructor() {
    this.count = 0;
  }

  getCount(): number {
    return this.count;
  }

  increment(): number {
    return ++this.count;
  }

  decrement(): number {
    return --this.count;
  }
}
```

And later inject it into our component:

```html
<!-- app.component.html -->
<button (click)="onIncrementButtonClick()">
  Increment
</button>
<button (click)="onDecrementButtonClick()">Decrement</button>
<p>Count: {{count}}</p>
```

```ts
// app.component.ts
import { Component, OnInit } from "@angular/core";
import { CountService } from "./count.service";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
  count: number;

  constructor(private countService: CountService) {}

  onIncrementButtonClick(): void {
    this.count = this.countService.increment();
  }

  onDecrementButtonClick(): void {
    this.count = this.countService.decrement();
  }

  ngOnInit(): void {
    this.count = this.countService.getCount();
  }
}
```

This is just a basic example that aims for simplicity just to show you with a simple way a use case of DI in Angular. In more complex projects you might resort to Observables, RxJS operators, etc.

What I want you to notice is that we can **_inject_** our `CountService` into our`AppComponent` in the constructor of this component so that we have a little state management: the state (count value) resides inside our service and its data is read by whatever component injects it.

In this example, our `CountService` **_lives_** for the entire lifetime of our application and its provided in the root (line 4) of our app, what tells us that anything (module, component, other services) can require that service through the syntax we just saw.

_(under construction)_
