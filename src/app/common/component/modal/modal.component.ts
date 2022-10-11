import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalDisplay = false

  @Output() confirmModal = new EventEmitter()
  @Output() cancelModal = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.cancelModal.emit()
  }

  submit() {
    this.confirmModal.emit()
  }
}
