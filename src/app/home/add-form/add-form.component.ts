import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/serviceFiles/modal-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private modalService: ModalServiceService, private el: ElementRef) { }

  @Input() id?: string;
  isOpen = false;
  private element: any;

  

  ngOnInit() {
    // add self (this modal instance) to the modal service so it can be opened from any component
    this.modalService.add(this);

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
        if (el.target.className === 'modal') {
            this.close();
        }
    });
}

ngOnDestroy() {
    // remove self from modal service
    this.modalService.remove(this);

    // remove modal element from html
    this.element.remove();
}

open() {
    this.element.style.display = 'block';
    document.body.classList.add('show');
    this.isOpen = true;
}

close() {
    this.element.style.display = 'none';
    document.body.classList.remove('show');
    this.isOpen = false;
}

}
