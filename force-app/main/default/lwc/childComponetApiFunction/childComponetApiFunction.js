import { LightningElement, api } from 'lwc';

export default class ChildComponetApiFunction extends LightningElement {

    textMessage;
	@api
	handleMessage(stringStr){
		this.textMessage = stringStr;
	}
}