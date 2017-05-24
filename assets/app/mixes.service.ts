import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Mix } from './mix';
import { MIXES } from './mockmixes';

@Injectable()
export class MixesService {
    
    constructor(private http: Http) {}
    
    getMixes() {
        return this.http.get('/mixes')
            .map((response: Response) => {
                //console.log(response)
                const mixes = response.json().obj;
                let transformedMixes: Mix[] = [];
                for (let mix of mixes) {
                    console.log mix.Name
                    transformedMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.upvote, mix.downvote));
                }
                this.mixes = transformedMixes;
                
               // //console.log(transformedMixes)
                console.log("NOW PASSED INTO")
                return transformedMixes;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    getMix(id: number) {
        //console.log(id)
        return this.http.get('/mixes/'+id)
            .map((response: Response) => {
                console.log(response)
                const mix = response.json().obj;
                console.log(mix)
         
                let foundmix = new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.upvote, mix.downvote);
            
                this.mix = foundmix;
         
                console.log("NOW PASSED INTO")
                return foundmix;
            })
         //   .catch((error: Response) => Observable.throw(error.json()));
}
}