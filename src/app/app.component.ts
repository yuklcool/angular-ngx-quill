import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editorContent: any = {};
  editor: any;
  name = 'Angular ' + VERSION.major;

  click() {
    alert(this.editorContent);
    this.editor = document.getElementById('editor');
    alert(this.editor.getContents());
  }
}
