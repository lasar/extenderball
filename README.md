# Extenderball

Very flexible extendable objects.

The idea is that object properties and methods are defined in "object
fragments", where each fragment has its own file. The fragments can then be
combined into one object as desired. That object can then be used to create as
many instances as required.

Goals:

- Allow creation of small, self-contained bits of code
- Reuse generic fragments in multiple "big" objects
- Replace arbitrary amounts of code depending on current configuration

I created this system as the basis for an online shopping platform. The platform
is supposed to work in very different ways depending on the current setup. I
wanted to be able to replace parts of the application logic depending on the
project's configuration, the current user's settings and any other relevant
factors. With Extenderball I can effectively replace single functions in an
object.

Note that Extenderball does not contain any logic for managing sets of object
fragments. This is not part of this module's scope (yet).

## Example

A very simple example for an object fragment (let's say it's in the file `objects/example/fragment.js`):

```js
var ExampleFragment = function(eb, obj) {
	obj.prototype.exampleProperty = 'Lazy dog';
	obj.prototype.exampleMethod = function() {
		return this.exampleProperty;
	};
};
module.exports = ExampleFragment;
```

This fragment sets a property and adds a method. To use this fragment:

```js
var EB = require('extenderball');
var MyObject = new EB(['objects/fragment']);
var myInstance = new MyObject();
// Use the instance
console.log(myInstance.exampleMethod());
```

This is a lot of work for a single fragment. Let's create another fragment
`objects/another`:

```js
var AnotherFragment = function(eb, obj) {
	obj.prototype.anotherProperty = 'Crazy fox';
	obj.prototype.anotherMethod = function() {
		return this.exampleMethod()+', '+this.anotherProperty;
	};
};
module.exports = AnotherFragment;
```

And then we extend the main code like this:

```js
var EB = require('extenderball');
var MyObject = new EB([
	'objects/fragment',
	'objects/another'
]);
var myInstance = new MyObject();
// Use the instance
console.log(myInstance.exampleMethod());
console.log(myInstance.anotherMethod());
```

The two object fragments were essentially merged into a single object. This can
be done with any number of fragments.

This and other examples can be found in the `examples` directory.

## Installation

```sh
npm install extenderball
```

## Documentation

How to use Extenderball.

### Usage

Install it via `npm install extenderball` or download and drop it in the
`node_modules` folder.

Then include it in your project with the usual

```js
var Extenderball = require('extenderball');
```

## Create, extendand and instantiate objects

The EB constructor takes an array as its single parameter. This array contains
paths to as many fragments as desired:

```js
var MyObject = new EB([
	'objects/general/logging',
	'objects/products/default',
	'objects/products/computer'
]);
```

An object can be extended with additional fragments afterwards:

```js
MyObject.extend('objects/products/laptop');
```

Creating an object instance is done as usual:

```js
var myInstance = new MyObject();
```

## Obhect Fragments

TODO: Must still be documented

- How to write an object fragment
- The init method

## TODO

- Check that a fragment is only loaded once
- Error catching
- Manage sets of fragments
- Ability to access "parent" methods when overwriting a method.
- 