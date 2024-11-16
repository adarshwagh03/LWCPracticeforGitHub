import { LightningElement } from 'lwc';

export default class ParentComponetApiFunction extends LightningElement {

    textVar;
	
	handleClick(){
		this.textVar = this.template.querySelector('lightning-input').value;
		this.template.querySelector('c-child-componet-api-function').handleMessage(this.textVar);
	}
}