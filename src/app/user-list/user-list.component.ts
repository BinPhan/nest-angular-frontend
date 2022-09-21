import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users: Array<any> = []

  constructor(private userListService: UserListService) {
  }

  ngOnInit(): void {
    this.userListService.getListUser().subscribe((res: any) => this.users = res)
  }

  goToEdit(id: number) {

  }

  delete(id: number) {

  }

}
