import { Component, OnInit } from '@angular/core';
import { Mix } from '../mix';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MixesService } from '../mixes.service';



@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  
  submitMix: FormGroup;

  constructor(private mixesService: MixesService) {}
  
  onSubmit() {
    var submittedMix = this.submitMix.value;
    console.log(submittedMix)
    var newMix = new Mix(submittedMix.mixName, submittedMix.mixURL, submittedMix.breed1, submittedMix.breed2,"all", 0, 0)
    console.log(newMix)
    this.mixesService.addMix(newMix).subscribe(
                (mix: Mix) => {
  
              // console.log(this.mixes)
            }
            );
    
  }

  ngOnInit() {
    
    this.submitMix = new FormGroup({
      'mixName' : new FormControl(null, Validators.required),
      'mixURL' : new FormControl(null, Validators.required),
      'breed1' : new FormControl(null, Validators.required),
      'breed2' : new FormControl(null)
    })
    

}
}
