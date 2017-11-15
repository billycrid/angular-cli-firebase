import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase";
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

export type User{
    id?: string;
    email: string;
    displayName: string;
    img: string;
};

@Injectable()
export class UserService {
  constructor(private api: AngularFireAuth, private store: AngularFirestore) { }

  loginFb() {
      const provider = new FacebookAuthProvider();
      this.api.auth.signInWithPopup(provider)
          .then((data) => this.checkRegistration(data, 'fb'));
  }

  loginEmail(email: string, pass: string) {
    return this.api.auth.signInWithEmailAndPassword(email, pass);
  }

  userSearch(userSearch: string) {
    return userSearch;
  }

  logout() {
      return this.api.auth.signOut().then(
          (data) => {
              return data;
          }
      );
  }

  signUp(email: string, pass: string) {
      return this.api.auth.createUserWithEmailAndPassword(email, pass)
          .then((data) => this.checkRegistration(data, 'email'))
          .catch(
              (error) => {
                  if (error.code === 'auth/weak-password') {
                      alert('The password is too weak');
                  } else {
                      alert(error.message);
                  }
              }
          );
  }

    /**
     * check if a user has been registered
     * @param data
     */
  checkRegistration(data: any, type: string) {
      let registeredUser;
      let user: User;
      console.log(data);
      if (type !== 'fb') {
          user = {
              id: data.uid,
              email: data.email,
              displayName: data.displayName || '',
              img: ''
          };
      } else {
          user = {
              id: data.user.uid,
              email: data.user.providerData[0].email,
              displayName: data.user.providerData[0].displayName,
              img: data.user.providerData[0].photoURL
          };
      }

      return this.store.collection('users').valueChanges().subscribe(
          (data) => {
              registeredUser = data.find((d) => d.email === user.email);
              if (!registeredUser) {
                  this.registerUser(user);
              }
              return data;
          }
      );
  }



    /**
     * register a uyser
     * @param data
     * @returns {any}
     */
  registerUser(data: User) {
      console.log('registered new user');
      return this.store.collection('users').doc(data.id).set(data);
  }
}
