import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor() { 
    console.info("CreateProfileComponent.constructor()");
  }

  ngOnInit(): void {
    console.info("CreateProfileComponent.ngOnInit()");
  }

  onSubmit() {
    console.info("Création du profil");
  }

}
