import { Component, OnInit } from '@angular/core';
import { IdService } from '../common/service/id.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  user: Array<any> = []
  constructor(private idS: IdService) { }

  modalDisplay = false

  ngOnInit(): void {
  }

  openModal() {
    this.modalDisplay = true

  }

  closeModal(e: any) {
    this.modalDisplay = e
  }

  addUser(user: any) {
    user.id = this.idS.getID();
    console.log(this.user);

    this.user.push(user)
  }

  deleteUser(id: any) {

    this.user = this.user.filter(item => { return item.id !== id })
  }
}
