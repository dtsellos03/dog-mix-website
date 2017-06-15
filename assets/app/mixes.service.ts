import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Mix } from './mix';
import { MIXES } from './mockmixes';

@Injectable()
export class MixesService {
    
      serviceMixes = [];
      isLoaded = false;
    
    
    constructor(private http: Http) {}
    
 
    
    doStuff() {
        this.isLoaded = true;
        this.getMixes()
        .subscribe(
            (mixes: Mix[]) => {
                this.serviceMixes = mixes;
                //this.isLoaded = true;
                console.log("/this is loaded is" + this.isLoaded)
                

            }
        );
    }
    
 
    
    getMixes() {
        return this.http.get('/mixes')
            .map((response: Response) => {
                //console.log(response)
                const mixes = response.json().obj;
                let transformedMixes: Mix[] = [];
                for (let mix of mixes) {
                    //console.log mix.Name
                    //console.log mix.checkAll
                    transformedMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote));
                }
                this.mixes = transformedMixes;
                
               // //console.log(transformedMixes)
                console.log("NOW PASSED INTO")
                return transformedMixes;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    getTopMixes() {
        this.doStuff()
        return this.http.get('/topmixes')
            .map((response: Response) => {
                //console.log(response)
                const topmixes = response.json().topMixes;
                const botmixes = response.json().botMixes
                let topMixes: Mix[] = [];
                let botMixes: Mix[] = [];
                for (let mix of topmixes) {
                    topMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote));
                }
                for (let mix of botmixes) {
                    botMixes.push(new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote));
                }
                this.topMixes = topMixes;
                this.topMixes = botMixes;
                
                let returnobj = {
                    topmixes: topMixes,
                    botmixes: botMixes
                }
                
                return returnobj
               
            })
            /** .catch((error: Response) => Observable.throw(error.json())); */
    }
    
    getMix(id: number) {
        //console.log(id)
        return this.http.get('/mixes/'+id)
            .map((response: Response) => {
                console.log(response)
                const mix = response.json().obj;
                console.log(mix)
         
                let foundmix = new Mix(mix._id, mix.Name, mix.image, mix.breed1, mix.breed2, mix.checkAll, mix.upvote, mix.downvote);
            
                this.mix = foundmix;
         
                console.log("NOW PASSED INTO")
                return foundmix;
            })
         //   .catch((error: Response) => Observable.throw(error.json()));
}
}