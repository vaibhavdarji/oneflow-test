import { Injectable } from '@angular/core';

import { Comment } from './comment/comment';
import { MOCK_COMMENTS } from './comment/mock-comment';
import {Contract} from './contract/contract';
import {MOCK_CONTRACTS} from './contract/mock-contract';

@Injectable()
export class RestApiService {
    public subject: string;
    getContract(): Contract {

        return MOCK_CONTRACTS;
    }

    getComments(): Comment[] {
        return MOCK_COMMENTS;
    }
}
