import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: String[] = [];
  errorMessage: string = "";
  numberOfTeams: number = 0;
  randomIndex: number = 0;
  teams: String[][] = [];

  public onInput(memberName: string) {
    this.newMemberName = memberName;
  }

  public onTeamInput(teamName: string) {
    this.numberOfTeams = parseInt(teamName);
  }

  public addMember() {
    if (this.newMemberName.length < 3) {
      this.errorMessage = "Member name must be at least 3 characters long";
      return;
    }

    this.errorMessage = "";

    this.members.push(this.newMemberName);
    this.newMemberName = "";
    console.log(this.members);
  }

  public generateTeams() {
    console.log(this.members);
    console.log(this.members.length);

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members to create " + this.numberOfTeams + " teams";
      return;
    }

    this.errorMessage = "";

    for (let i = 0; i < this.numberOfTeams; i++) {
      this.teams.push([]);
    }

    while (this.members.length > 0) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        this.randomIndex = Math.floor(Math.random() * this.members.length);
        this.teams[i].push(this.members[this.randomIndex]);
        this.members.splice(this.randomIndex, 1);
      }
    }
    // print 2d array
    for (let i = 0; i < this.teams.length; i++) {
      console.log(this.teams[i]);
    }

  }


}
