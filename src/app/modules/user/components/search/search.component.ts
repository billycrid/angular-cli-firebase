import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userSearch: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchUser() {
      console.log('billy');
      console.log(this.userService.userSearch(this.userSearch));
  }

}
