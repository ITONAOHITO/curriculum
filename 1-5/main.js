function createjuice (fruits) {
    console.log(fruits + 'を受け取りました。ジュースにして返します');
    let juice = fruits + 'ジュース';
    return juice;
    
}

let orangejuice = createjuice("みかん");
console.log(orangejuice + 'が届きました');