import React from 'react';

export default class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    };

    desription() {
        return "简介 ：" + this.name + " " + this.age;
    }


}

