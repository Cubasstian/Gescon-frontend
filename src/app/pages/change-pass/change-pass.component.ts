import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APP_NAME } from "../../utils/app.titles";
import { ThemeService } from "../../services/theme.service";
import { UserLogin } from "../../models/user-login";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { catchError, first, tap } from "rxjs/operators";
import { of } from "rxjs";
import { JwtDTO } from "../../models/jwt-dto";
import { NbToastrService } from "@nebular/theme";
import { DataSelectorService } from "../../services/data-selector.service";

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  form: FormGroup;
  title = APP_NAME;
  icon: string;
  userLogin: UserLogin;
  onLoginError: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private themeService: ThemeService,
    private tokenService: UserService,
    private authService: AuthService,
    private toastService: NbToastrService,
    private dataSelectorService: DataSelectorService,
  ) {
  } 
  ngOnInit(): void {
   
  }

}
