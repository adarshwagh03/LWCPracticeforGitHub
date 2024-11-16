import { LightningElement, track } from 'lwc';

export default class ParentComponetCustomEvent extends LightningElement {

   @track textMessageVar;
	handleMessage(eve){
		this.textMessageVar = eve.detail;
	}
}