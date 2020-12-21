import {HttpClient} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmailValidator {

    private timeout;

    constructor(private readonly http: HttpClient) {
    }

    validate(control: AbstractControl): Promise<{ [key: string]: boolean }> {
        clearTimeout(this.timeout);

        return new Promise((resolve, reject) => {
            this.timeout = setTimeout(() => {
                this.http.get<boolean>(`/checkEmail?value=${control.value}`)
                    .subscribe(flag => {
                            if (flag) {
                                resolve({'emailExists': true});
                            } else {
                                resolve(null);
                            }
                        },
                        (err) => {
                            console.log(err);
                        }
                    );
            }, 200);
        });
    }

}
