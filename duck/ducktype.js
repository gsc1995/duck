var duck = {
    duckSinging: function() {
        console.log('嘎嘎嘎');
    }
}
var chicken = {
    chickSinging: function() {
        console.log('咯咯咯');
    },
    duckSinging: function() {
        console.log('嘎嘎嘎');
    }
}
var chior = [] //合唱团
var joinChior = function(animal) {
    // 检测鸭但是没有类型检测
    // typeof 运算符，满足检测属性
    // 函数，方法，接口，
    // 具有相同接口的，在js 就认为是一类对象

    if (animal &&
        typeof animal.duckSinging === 'function') {
        chior.push(animal);
        console.log('恭喜加入皇家合唱团');
        console.log('合唱团已有成员数量' +
            chior.length);
    } else {
        console.log('这里不属于你');
    }
}
joinChior(duck);
joinChior(chicken);