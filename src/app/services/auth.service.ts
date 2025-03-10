import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  DocumentData,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  private username: string | null = null; // Nullable username

  constructor(private auth: Auth, private firestore: Firestore) {
    setTimeout(() => {
      onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          try {
            const userDoc = await getDoc(
              doc(this.firestore, 'users', user.uid)
            );
            this.username = userDoc.exists()
              ? userDoc.data()['username']
              : null;
          } catch (error) {
            console.error('Error fetching username:', error);
          }
        } else {
          this.username = null;
        }
        this.userSubject.next(user);
      });
    }, 100);
  }

  // ✅ Signup function: Creates a user and stores additional data in Firestore
  async signup(
    email: string,
    password: string,
    username: string
  ): Promise<void> {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(this.auth, email, password);
      await setDoc(doc(this.firestore, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        email,
        username,
        currency: 1000, // Default starting currency
      });
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }

  // ✅ Login function: Authenticates the user and fetches username
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const userDoc = await getDoc(
        doc(this.firestore, 'users', userCredential.user.uid)
      );
      if (userDoc.exists()) {
        this.username = userDoc.data()['username'] || null;
      } else {
        this.username = null;
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // ✅ Logout function: Logs out the user and clears username
  async logout() {
    this.username = null;
    return signOut(this.auth);
  }

  // ✅ Observable for auth state changes
  getAuthState(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  // ✅ Return username safely
  getUsername(): string | null {
    return this.username ?? 'Guest User';
  }

  // ✅ Fetch user data from Firestore
  async getUserData(uid: string): Promise<DocumentData | undefined> {
    try {
      const docRef = doc(this.firestore, 'users', uid);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? docSnap.data() : undefined;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }
}
