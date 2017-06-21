import { Component, OnInit } from '@angular/core';
import { MixesService } from '../mixes.service';
import { Mix} from '../mix';
import {FilterPipe} from './pipes';


    function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '').replace('.jpg','')] = r(item); });
  return images;
}
 
 
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}


@Component({
  selector: 'app-show-mixes',
  templateUrl: './show-mixes.component.html',
  styleUrls: ['./show-mixes.component.css'],
  providers: []
    // make fade in animation available to this component

})
export class ShowMixesComponent implements OnInit {


 
       
    breeds=[{"name":"Dachshund","image":"dachshund"},
{"name":"Corgi","image":"corgi"},
{"name":"Maltese","image":"maltese"},
{"name":"Pug","image":"pug"},
{"name":"French Bulldog","image":"frenchbulldog"},
{"name":"Boxer","image":"boxer"},
{"name":"Boston Terrier","image":"bostonterrier"},
{"name":"Chihuahua","image":"chihuahua"},
{"name":"Pomeranian","image":"pomeranian"},
{"name":"Yorkshire Terrier","image":"yorkshireterrier"},
{"name":"Labrador Retriever","image":"labradorretriever"},
{"name":"Golden Retriever","image":"goldenretriever"},
{"name":"Papillon","image":"papillon"},
{"name":"Shiba Inu","image":"shibainu"},
{"name":"Beagle","image":"beagle"},
{"name":"Australian Shepherd","image":"australianshepherd"},
{"name":"German Shepherd","image":"germanshepherd"},
{"name":"Greyhound","image":"greyhound"},
{"name":"Pit Bull","image":"pitbull"},
{"name":"Chow Chow","image":"chowchow"},
{"name":"Alaskan Malamute","image":"malamute"},
{"name":"Pekingese","image":"pekingese"},
{"name":"Siberian Husky","image":"husky"}]



     mixes: Mix[]
    activeBreed = "all";
    
  

    
    constructor(private mixesService: MixesService) {}

    onClickMe(breed: string) {
        console.log(breed)
        this.queryString=breed
        console.log(this.activeBreed)
        
    }
    

    
  ngOnInit() {
        const images = importAll(require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/));  
        let breedsToService = {}
        this.breeds.forEach(function(element){
            
            element.image = images[element.image]
            breedsToService[element.name]=element.image
        })
        this.mixesService.serviceBreeds = breedsToService;
        
        
        if (this.mixesService.isLoaded == true) {
            this.mixes = this.mixesService.serviceMixes;
            
        }
   
        else {
            console.log("Should be after")
            this.mixesService.getMixes()
            .subscribe(
                (mixes: Mix[]) => {
                this.mixes = mixes;
                
              // console.log(this.mixes)
            }
            );
            this.mixesService.doStuff();
        }

    
    
    
    

    

}

