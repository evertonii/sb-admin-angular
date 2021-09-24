import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { RequestLoginModel } from './requestLoginModel';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    public requestLogin: RequestLoginModel = new RequestLoginModel();

    constructor(private service: LoginService) {}
    ngOnInit() {
        this.requestLogin = new RequestLoginModel();
    }

    efetuarLogin(){
        this.service.Login(this.requestLogin).subscribe(
            data => {
                localStorage.removeItem('token');

                localStorage.setItem('token', data.token);
            },
            error => {
                console.log("aqui");
            }
        );
    }
}
