import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() data: any = {}

  @Output() changePage = new EventEmitter()

  constructor() { }

  totalNumberOfPages: any[] = []

  limit: number = 5
  currentPage: number = 1
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data.total) {
      this.totalNumberOfPages = Array(Math.ceil(this.data.total / this.data.per_page)).map((item, index) => item)
    }
  }

  moveTo(page: any) {
    if (page < 1 || page > Math.ceil(this.data.total / this.data.per_page)) {
      return
    }
    this.currentPage = page
    this.changePage.emit({ page: this.currentPage, limit: this.limit })
  }

  changeLimit(event: any) {
    this.limit = event.target.value
    this.currentPage = 1
    this.changePage.emit({ page: this.currentPage, limit: this.limit })
  }
}
