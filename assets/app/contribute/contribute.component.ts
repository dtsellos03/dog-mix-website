import { Component, OnInit } from '@angular/core';
import { Mix } from '../mix';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MixesService } from '../mixes.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  
  submitMix: FormGroup;
  
  breedchoices = [];
  breederror = 0;
  successmessage = 0;

  constructor(private mixesService: MixesService, private router : Router) {}
  
  onSubmit() {
    
// Variable to check if duplicate mix is submitted

    this.breederror = 0;   
    var nullcheck = 0;
    var submittedMix = this.submitMix.value;
    
    this.mixesService.serviceMixes.forEach(function(mix) {
      var combo1 = mix.breed1.toString()+mix.breed2.toString();
      var formcombo1 = submittedMix.breed1.toString() + submittedMix.breed2.toString();
      var formcombo2 = submittedMix.breed2.toString() + submittedMix.breed1.toString();
      if (formcombo1 == combo1 || formcombo2 == combo1) {
        
// Set duplicate mix error
        nullcheck = 1 ;
      }
    });
    
    if (nullcheck == 1) {
      this.breederror = 1
      return null
    }
    
//Otherwise, display success message

    this.successmessage = 1;
    

    var newMix = new Mix(" ", submittedMix.mixName, submittedMix.mixURL, submittedMix.breed1, submittedMix.breed2,"all", 0, 0, submittedMix.imageURL)

 // Get mixes from server again
    this.mixesService.isLoaded = false; 
    this.mixesService.addMix(newMix).subscribe(
                (mix: Mix) => {
                  
 //Redirect to mixes page
 
              this.router.navigate(['/mixes'])
            }
            );
    
  }

  ngOnInit() {

 // Initiialize array of breeds to choose from

    for (var name in this.mixesService.serviceBreeds) { 
      this.breedchoices.push(name)
    }
    
    
    this.submitMix = new FormGroup({
      'mixName' : new FormControl(null, Validators.required),
      'mixURL' : new FormControl(null, Validators.required),
      'breed1' : new FormControl(null, Validators.required),
      'breed2' : new FormControl(null, Validators.required),
      'imageURL' : new FormControl(null, Validators.required)
    })
    

}
}
