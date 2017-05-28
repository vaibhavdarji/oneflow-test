import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment/comment';
import { RestApiService } from '../shared/restapi.service';

@Component({
  selector: 'oneflow-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
    title: string;
    comments: Comment[];
    constructor(private apiService: RestApiService) {
        this.title = 'Comments';
    }

    ngOnInit() {
        this.comments = this.apiService.getComments();
    }

    addComment(form: string) {
        var data = $('#'+ form).serializeArray();
        var lastRecord = this.comments[this.comments.length - 1];
        this.comments.push(new Comment(lastRecord.id, this.apiService.subject, 0, data[0]['value'], 'Pradip Caulagi', data[1]['value']));
        this.apiService.subject = '';
        $('#'+ form).trigger('reset');
    }

    onCommentSelect (comment: Comment) {
        if (comment.subject) {

            var range = document.createRange();
            var $descriptionTag = $('.description');
            range.setStart($descriptionTag[0].firstChild, $descriptionTag.html().indexOf(comment.subject));
            range.setEnd($descriptionTag[0].firstChild, $descriptionTag.html().indexOf(comment.subject) + comment.subject.length);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);

            var offset = $descriptionTag.offset();
            window.scrollTo(offset.left, offset.top);
        }
    }
}
