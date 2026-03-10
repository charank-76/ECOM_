import { auth } from "./firebase";
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut} from 'firebase/auth';

   export async function login(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);

    if (!result.user.emailVerified) {
      alert("Please verify your email before logging in.");
      await signOut(auth);
      return false;
    }

    alert("Login successful");
    return true;

  } catch (error) {
    alert(error.message);
    console.error("Login error:", error);
    return false;
  }
}

    export async function createAccount(email,password){
        try{
            const result=await createUserWithEmailAndPassword(auth,email,password);
            await sendEmailVerification(result.user);
            alert("Sign up successful. Please verify your email before logging in.");
        }
        catch(error){
            alert(error.message);
            console.error("Sign up error:",error);
        }}

    export async function logout(){
        try{
            await signOut(auth);
            alert("Logged out successfully");
        }
        catch(error){
            alert(error.message);
            console.error("Logout error:",error);
        }}