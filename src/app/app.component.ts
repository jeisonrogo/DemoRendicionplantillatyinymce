import { Component } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";
import { FormBuilder, FormGroup }                 from "@angular/forms";
import {filter, map, pluck, switchMap, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form$: FormGroup = this.formBuilder.group({
    uid: "",
    header:  "",
    subheader:  "",
    isPublished: "",
    updatedOn:  "",
    createdOn:  "",
    prettyUrl: "",
    author: "",
    previewImageSource:  "",
    content:"<html> <head><title>Mi página de ejemplo</title></head><body>Aquí va el contenido</body></html>",
  });
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmit(blogPostData: any) {
    console.log('blog post submitted', blogPostData);

  }
}

