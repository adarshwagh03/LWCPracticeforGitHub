import { LightningElement, wire, track } from 'lwc';
import searchAccountMethod from '@salesforce/apex/AccountSearchHandler.searchAccountMethod'

const columns =[
    {label : 'Account Id', fieldName : 'Id', type : 'text'},
    {label : 'Account Name', fieldName : 'Name', type : 'text'},
    {label : 'Phone', fieldName : 'Phone', type : 'text'}
];
export default class WireMethodComponent extends LightningElement {

    @track accRecData ;
    @track error;
    
    columns = columns;

    @wire(searchAccountMethod)searchAccountMethodWire({data,error}){

          if(data){
               this.accRecData = data;
               this.error = undefined;
          }
          else if(error){
               this.error = error;
               this.accRecData = undefined;
          }
   }
}
