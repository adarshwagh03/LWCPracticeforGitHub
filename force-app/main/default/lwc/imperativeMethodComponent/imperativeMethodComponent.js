import { LightningElement,wire,track } from 'lwc';
import displayAccountRect from '@salesforce/apex/ImperativeMethodHandler.displayAccountRect';
import relatedAccContact from '@salesforce/apex/ImperativeMethodHandler.relatedAccContact'

const columns = [
        {label : 'Contact Name' , fieldName : 'Name'},    
		{label : 'Last Name', fieldName : 'LastName'}
		
];
export default class ImperativeMethodComponent extends LightningElement {
    
    @track accRecData = [];
    @track error ;
    @track selectedAccountId;
    @track contacts = [ ] ;
    @wire(displayAccountRect)displayAccountRectWired({data,error}){
        if(data){
            this.accRecData = data.map(Account  => ({
                label : Account.Name,
                value : Account.Id
            }));
            this.error = undefined ;

        }
        else if(error){
            this.error = error;
            this.accRecData = undefined;
        }
    }

    handleSelect(event){
        this.selectedAccountId = event.target.value;
        this.fetchRelContact();
    }

    fetchRelContact(){

        relatedAccContact({accountId : this.selectedAccountId }).then( (result) => {
            this.contacts = result.map(contact => ({
                Id : contact.Id,
                Name : contact.Name,
                LastName : contact.LastName
            }));
            
            console.log('Console Msg' +JSON.stringify(this.contacts));
            this.error = undefined;
        }).catch((error) => {
            this.error = error;
            this.contacts = [];
        });

    }
}