import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //base url
  private _baseUrl = "https://jsonplaceholder.typicode.com";

  private _baselocalUrl = "http://localhost:3000";

  //Api router
  private _getAllUsers = this._baseUrl + "/users";
  //Api router
  private _userRegisterUrl = this._baselocalUrl + "/user/register";
  //Api router
  private _userLoginUrl = this._baselocalUrl + "/user/login";
  //Api router
  private _allUserUrl = this._baselocalUrl + "/user/all";
  //Api router
  private _updateUser_stateUrl = this._baselocalUrl + "/user/update-state/";

    //Api router
    private _updateUserInfoUrl = this._baselocalUrl + "/user/update/";
  //Api router
  private _deleteUserUrl = this._baselocalUrl + "/user/delete/";
  //getOneUser
  private _getOneUserUrl = this._baselocalUrl + "/user/one/";

//car api---------------------------------------------------------------

   //Api router
   private _allCarUserUrl = this._baselocalUrl + "/car/all/";

   private _addCarUrl = this._baselocalUrl + "/car/add";

   private _deleteCarUrl = this._baselocalUrl + "/car/delete/";

   private _getOneCar = this._baselocalUrl + "/car/one/";

   private _updateCar = this._baselocalUrl + "/car/update/";


  //monitor api---------------------------------------------------------------

    //Api router
    private _getAllMonitor = this._baseUrl + "/Monitor";
    //Api router
    private _monitorRegisterUrl = this._baselocalUrl + "/monitor/register";
    //Api router
    private _monitorLoginUrl = this._baselocalUrl + "/monitor/login";
    //Api router
    private _allmonitorUrl = this._baselocalUrl + "/monitor/all";
    //Api router
    private _updatemonitor_stateUrl = this._baselocalUrl + "/monitor/update-state/";
  
      //Api router
      private _updatemonitorInfoUrl = this._baselocalUrl + "/monitor/update/";
    //Api router
    private _deletemonitorUrl = this._baselocalUrl + "/monitor/delete/";
    //getOnemonitor
    private _getOnemonitorUrl = this._baselocalUrl + "/monitor/one/";




  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this._getAllUsers);
  }





  registerUser(user:User){
    return this.http.post<any>(this._userRegisterUrl,user);
  }

  loginUser(user:User){
    return this.http.post<any>(this._userLoginUrl,user);
  }

  isLoggedAdmin(){
    let token = localStorage.getItem("token")
    if(token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.role == "admin"){
        return true
      }else{
        return false
      }
    }else{
      return false
    }

    
  };

  isLoggedUser(){
    let token = localStorage.getItem("token")
    if(token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.role == "user"){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  };

  isLoggedMonitor(){
    let token = localStorage.getItem("token")
    if(token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.role == "monitor"){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

//user---------------------------------------------------------------------------
  allUsers(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allUserUrl,{headers: headers_options});
  }

  getOneUser(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOneUserUrl+id,{headers: headers_options});
  }
  

  update_state_User(id: String){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateUser_stateUrl+id,null,{headers: headers_options});
  }

  updateInfoUser(id,user){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateUserInfoUrl+id,user,{headers: headers_options});
  }

  deleteUser(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteUserUrl+id,{headers: headers_options});
  }

//car---------------------------------------------------------------------------

  allCar(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allCarUserUrl,{headers: headers_options});
  }

  addCar(car){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.post<any>(this._addCarUrl,car,{headers: headers_options});
  }

  deleteCar(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteCarUrl+id,{headers: headers_options});
  }

  getOneCar(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOneCar+id,{headers: headers_options});
  }
  
  updateCar(id,car){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateCar+id,car,{headers: headers_options});
  }


  //monitor----------------------------------------------------------

  registermonitor(user:User){
    return this.http.post<any>(this._monitorRegisterUrl,user);
  }

  allmonitors(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allmonitorUrl,{headers: headers_options});
  }

  getOnemonitor(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOnemonitorUrl+id,{headers: headers_options});
  }
  

  update_state_monitor(id: String){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updatemonitor_stateUrl+id,null,{headers: headers_options});
  }

  updateInfomonitor(id,monitor){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updatemonitorInfoUrl+id,monitor,{headers: headers_options});
  }

  deletemonitor(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deletemonitorUrl+id,{headers: headers_options});
  }




}
