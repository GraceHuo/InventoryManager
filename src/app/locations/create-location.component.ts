import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  template: `
    <h1>New Location</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Location Form will go here]</h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `
})
export class CreateLocationComponent {
  isDirty: boolean = true

  constructor(private router: Router) {

  }

  cancel() {
    this.router.navigate(['/locations'])
  }
}
