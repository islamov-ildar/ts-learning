var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[".concat(name, "]: Typescript version is ").concat(this.version, " ");
    };
    return TypeScript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheels = 4;
    } //запись аналогична классу Car
    return Car2;
}());
//Модификаторы protected, public, private
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('Meow');
console.log(cat.color);
//Абстрактные классы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponents = /** @class */ (function (_super) {
    __extends(AppComponents, _super);
    function AppComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponents.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponents.prototype.info = function () {
        return 'String from info';
    };
    return AppComponents;
}(Component));
