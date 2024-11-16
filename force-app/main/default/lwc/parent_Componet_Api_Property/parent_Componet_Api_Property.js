import { LightningElement } from 'lwc';

export default class Parent_Componet_Api_Property extends LightningElement {

    message;
    handleClick(){

       this.message =  this.template.querySelector('lightning-input').value;
    }
}