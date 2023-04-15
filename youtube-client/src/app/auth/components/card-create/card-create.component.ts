import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {dateCheck, urlCheck} from '../../services/validators.service';
import {Store} from '@ngrx/store';
import {addCard} from '../../../redux/actions/cards.action';
import {selectorUserCards} from '../../../redux/selectors/cards.selector';



@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {
  public newCard: FormGroup;

  constructor(private formBuilder: FormBuilder, private state: Store) {
  }

  public ngOnInit(): void {
    this.newCard = this.formBuilder.group({
      'title': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'description': ['', [Validators.maxLength(255)]],
      'image': ['', [Validators.required, urlCheck()]],
      'video': ['', [Validators.required, urlCheck()]],
      'date': ['', [Validators.required, dateCheck()]]
    });
  }

  get titleErr(): string {
    const state: AbstractControl = this.newCard.get('title');
    if (state.errors === null) return '';
    if (state.errors['required']) return 'Please enter a title';
    if (state.errors['minlength']) return 'The title is too short';
    if (state.errors['maxlength']) return 'The title is too long';
  }

  get descriptionErr(): string {
    const state: AbstractControl = this.newCard.get('description');
    if (state.errors === null) return '';
    if (state.errors['maxlength']) return 'The title is too long';
  }

  get imgErr(): string {
    const state: AbstractControl = this.newCard.get('image');
    if (state.errors === null) return '';
    if (state.errors['required']) return 'Please enter a link to the image';
    if (state.errors['url']) return 'The image link is invalid';
  }

  get videoErr(): string {
    const state: AbstractControl = this.newCard.get('video');
    if (state.errors === null) return '';
    if (state.errors['required']) return 'Please enter a link to the video';
    if (state.errors['url']) return 'The video link is invalid';
  }

  get dateErr(): string {
    const state: AbstractControl = this.newCard.get('date');
    if (state.errors === null) return '';
    if (state.errors['required']) return 'Please enter a creation date';
    if (state.errors['date']) return 'The date is invalid';
  }

  public onSubmit(): void {
    const card: Card = Object.assign({
      dislikes: '0',
      likes: '0',
      view: '0',
      comments: '0',
      id: ''
    }, this.newCard.value);

    const date: Date = new Date(card.date);
    card.date = date.toISOString();

    this.state.select(selectorUserCards).subscribe((items) => {
        if (!items.state.some((item) => item.video === card.video)) {
          card.id = `#customcard ${items.state.length + 1}`;
          this.state.dispatch(addCard({card: card}));
        }
      }
    ).unsubscribe();
  }
}
