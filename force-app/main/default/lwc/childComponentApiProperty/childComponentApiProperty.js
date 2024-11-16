import { LightningElement, api } from 'lwc';

export default class ChildComponentApiProperty extends LightningElement {

    @api childTextVar;

}