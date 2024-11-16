import { LightningElement } from 'lwc';

export default class ChildComponetCoustomEvent extends LightningElement {

    handleClick(){
		const textMessage = this.template.querySelector('lightning-input').value;
		
		const event = new CustomEvent('mycoustomevent',{detail : textMessage});
		this.dispatchEvent(event);
	}
}