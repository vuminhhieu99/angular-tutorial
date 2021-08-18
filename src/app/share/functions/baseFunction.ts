import { Subject } from 'rxjs';
export class baseFunction {
    public static unDestroy(_unsubscribe: Subject<any>){
        if(_unsubscribe){
            _unsubscribe.next();
            _unsubscribe.complete();
            _unsubscribe.unsubscribe();
        }
    } 
}