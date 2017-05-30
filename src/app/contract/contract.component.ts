import { Component, OnInit } from '@angular/core';
import { Contract } from '../shared/contract/contract';
import { RestApiService } from '../shared/restapi.service';
declare var jQuery: any;
declare var shareSelectedText: any;

@Component({
  selector: 'oneflow-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

    contract: Contract;
    constructor(private apiService: RestApiService) {
    }

    ngOnInit() {
        this.getContract();
    }

    getContract() {
        this.contract = this.apiService.getContract();

        shareSelectedText('.description', {
            tooltipClass: '',    // cool, if you want to customize the tooltip
            sanitize: true,      // will sanitize the user selection to respect the Twitter Max length (recommended)
            buttons: [           // services that you want to enable you can add :
                'pencil',
                'lock',
                'heart-empty'
            ],
            tooltipTimeout: 250,  //Timeout before that the tooltip appear in ms
            actions: [this.addComment.bind(this), this.lockComment]
        });
    }

    addComment () {
        var offset = jQuery('form#addComment').offset();

        this.apiService.subject = window.getSelection().toString();
        window.scrollTo(offset.left, offset.top);
    }

    lockComment() {

    }
}
