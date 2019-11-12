import React from 'react';
import People from './People';

/*类的继承写法*/
export default class SuperPeople extends People  {
    constructor(){
        super("小绿",25);
    };

    desription() {
        return "他的朋友" + super.desription();
    }
}

