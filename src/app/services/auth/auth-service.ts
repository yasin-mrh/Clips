import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth'
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import IUser from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  async createUser(userData: IUser) {
    const userCred = await createUserWithEmailAndPassword(
      this.auth,
      userData.email,
      userData.password
    );
  
    await setDoc(doc(this.firestore, 'users', userCred.user.uid), {
      email: userData.email,
      name: userData.name,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    })

    updateProfile(userCred.user, {
      displayName: userData.name
    })

  }
}
