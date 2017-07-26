console.log('instanceof 获取对象是否是某个类的实例');
//多态
//duck,chicken,发出叫唤的指令，作出了相应的反应
//多态性无法让人满意，让动物叫，汪汪？
var makesound = function(animal) {
    if (typeof animal.sound === 'function') {
        animal.sound();
    }

    //if (animal instanceof duck) {
    //    console.log('嘎嘎嘎');

    //} else if (animal instanceof chicken) {
    //  console.log('咯咯咯');
    //} else if (animal instanceof Dog) {
    //  console.log('汪汪汪');
    //}
}
var duck = function() {};
duck.prototype.sound = function() {
    console.log('嘎嘎嘎');
}
var chicken = function() {};
chicken.prototype.sound = function() {
    console.log('咯咯咯');
}
var Dog = function() {};
Dog.prototype.sound = function() {
    console.log('汪汪汪');
}
var wangcai = new Dog
var Duck = new duck();
var Chicken = new chicken();
makesound(Duck);
makesound(Chicken);
makesound(wangcai);